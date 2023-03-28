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
    public class When_saving_secretanswer : UsingSecretAnswerControllerSpec
    {
        private ActionResult<SecretAnswerDto> _result;

        private SecretAnswer _secretanswer;
        private SecretAnswerDto _secretanswerDto;

        public override void Context()
        {
            base.Context();

            _secretanswer = new SecretAnswer
            {
                QuestionId = 56,
                Answer = "Answer"
            };

            _secretanswerDto = new SecretAnswerDto{
                    QuestionId = 73,
                    Answer = "Answer"
            };

            _secretanswerService.Save(_secretanswer).Returns(_secretanswer);
            _mapper.Map<SecretAnswerDto>(_secretanswer).Returns(_secretanswerDto);
        }
        public override void Because()
        {
            _result = subject.Save(_secretanswer);
        }

        [Test]
        public void Request_is_routed_through_service()
        {
            _secretanswerService.Received(1).Save(_secretanswer);

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.Result.ShouldBeOfType<OkObjectResult>();

            var resultListObject = (_result.Result as OkObjectResult).Value;

            resultListObject.ShouldBeOfType<SecretAnswerDto>();

            var resultList = (SecretAnswerDto)resultListObject;

            resultList.ShouldBe(_secretanswerDto);
        }
    }
}

