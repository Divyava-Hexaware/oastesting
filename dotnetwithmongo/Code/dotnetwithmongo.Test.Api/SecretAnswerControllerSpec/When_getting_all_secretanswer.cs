using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using NSubstitute;
using Shouldly;
using Microsoft.AspNetCore.Mvc;
using dotnetwithmongo.BusinessEntities.Entities;
using dotnetwithmongo.Contracts.DTO;

namespace dotnetwithmongo.Test.Api.SecretAnswerControllerSpec
{
    public class When_getting_all_secretanswer : UsingSecretAnswerControllerSpec
    {
        private ActionResult<IEnumerable<SecretAnswerDto>> _result;

        private IEnumerable<SecretAnswer> _all_secretanswer;
        private SecretAnswer _secretanswer;

        private IEnumerable<SecretAnswerDto>  _all_secretanswerDto;
        private SecretAnswerDto _secretanswerDto;
    

        public override void Context()
        {
            base.Context();

            _secretanswer = new SecretAnswer{
                QuestionId = 99,
                Answer = "Answer"
            };

            _secretanswerDto = new SecretAnswerDto{
                    QuestionId = 72,
                    Answer = "Answer"
                };

            _all_secretanswer = new List<SecretAnswer> { _secretanswer};
            _secretanswerService.GetAll().Returns(_all_secretanswer);
            _all_secretanswerDto  = new List<SecretAnswerDto> {_secretanswerDto};
            _mapper.Map<IEnumerable<SecretAnswerDto>>(_all_secretanswer).Returns( _all_secretanswerDto);
        }
        public override void Because()
        {
            _result = subject.Get();
        }

        [Test]
        public void Request_is_routed_through_service()
        {
            _secretanswerService.Received(1).GetAll();

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.Result.ShouldBeOfType<OkObjectResult>();

            var resultListObject = (_result.Result as OkObjectResult).Value;

            resultListObject.ShouldBeOfType<List<SecretAnswerDto>>();

            List<SecretAnswerDto> resultList = resultListObject as List<SecretAnswerDto>;

            resultList.Count.ShouldBe(1);

            resultList.ShouldBe(_all_secretanswerDto);
        }
    }
}