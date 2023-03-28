using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using NSubstitute;
using Shouldly;
using Microsoft.AspNetCore.Mvc;
using dotnetwithmongo.BusinessEntities.Entities;
using dotnetwithmongo.Contracts.DTO;
using dotnetwithmongo.BusinessServices.Services;

namespace dotnetwithmongo.Test.Api.SecretAnswerControllerSpec
{
    public class When_updating_secretanswer : UsingSecretAnswerControllerSpec
    {
        private ActionResult<SecretAnswerDto > _result;
        private SecretAnswer _secretanswer;
        private SecretAnswerDto _secretanswerDto;

        public override void Context()
        {
            base.Context();

            _secretanswer = new SecretAnswer
            {
                QuestionId = 8,
                Answer = "Answer"
            };

            _secretanswerDto = new SecretAnswerDto{
                    QuestionId = 62,
                    Answer = "Answer"
            };

            _secretanswerService.Update(_secretanswer.Id, _secretanswer).Returns(_secretanswer);
            _mapper.Map<SecretAnswerDto>(_secretanswer).Returns(_secretanswerDto);
            
        }
        public override void Because()
        {
            _result = subject.Update(_secretanswer.Id, _secretanswer);
        }

        [Test]
        public void Request_is_routed_through_service()
        {
            _secretanswerService.Received(1).Update(_secretanswer.Id, _secretanswer);

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.Result.ShouldBeOfType<OkObjectResult>();

            var resultListObject = (_result.Result as OkObjectResult).Value;

            resultListObject.ShouldBeOfType<SecretAnswerDto>();

            var resultList = resultListObject as SecretAnswerDto;

            resultList.ShouldBe(_secretanswerDto);
        }
    }
}