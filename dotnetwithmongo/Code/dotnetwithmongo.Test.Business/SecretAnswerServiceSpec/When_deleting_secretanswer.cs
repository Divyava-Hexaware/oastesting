using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using NSubstitute;
using Shouldly;
using dotnetwithmongo.BusinessEntities.Entities;

namespace dotnetwithmongo.Test.Business.SecretAnswerServiceSpec
{
    public class When_deleting_secretanswer : UsingSecretAnswerServiceSpec
    {
        private bool _result;

        private string Id = "Khfhuihd";

        public override void Context()
        {
            base.Context();

            _secretanswerRepository.Delete(Id).Returns(true);
        }
        public override void Because()
        {
            _result = subject.Delete(Id);
        }

        [Test]
        public void Request_is_routed_through_repository()
        {
            _secretanswerRepository.Received(1).Delete(Id);

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.ShouldBeOfType<bool>();

            _result.ShouldBe(true);
        }
    }
}