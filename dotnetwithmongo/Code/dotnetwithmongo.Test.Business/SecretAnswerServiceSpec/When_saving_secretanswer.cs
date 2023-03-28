using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using NSubstitute;
using Shouldly;
using dotnetwithmongo.BusinessEntities.Entities;

namespace dotnetwithmongo.Test.Business.SecretAnswerServiceSpec
{
    public class When_saving_secretanswer : UsingSecretAnswerServiceSpec
    {
        private SecretAnswer _result;

        private SecretAnswer _secretanswer;

        public override void Context()
        {
            base.Context();

            _secretanswer = new SecretAnswer
            {
                QuestionId = 71,
                Answer = "Answer"
            };

            _secretanswerRepository.Save(_secretanswer).Returns(true);
        }
        public override void Because()
        {
            _result = subject.Save(_secretanswer);
        }

        [Test]
        public void Request_is_routed_through_repository()
        {
            _secretanswerRepository.Received(1).Save(_secretanswer);

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.ShouldBeOfType<SecretAnswer>();

            _result.ShouldBe(_secretanswer);
        }
    }
}