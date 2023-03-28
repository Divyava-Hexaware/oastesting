using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using NSubstitute;
using Shouldly;
using dotnetwithmongo.BusinessEntities.Entities;

namespace dotnetwithmongo.Test.Business.SecretAnswerServiceSpec
{
    public class When_getting_all_secretanswer : UsingSecretAnswerServiceSpec
    {
        private IEnumerable<SecretAnswer> _result;

        private IEnumerable<SecretAnswer> _all_secretanswer;
        private SecretAnswer _secretanswer;

        public override void Context()
        {
            base.Context();

            _secretanswer = new SecretAnswer{
                QuestionId = 26,
                Answer = "Answer"
            };

            _all_secretanswer = new List<SecretAnswer> { _secretanswer};
            _secretanswerRepository.GetAll().Returns(_all_secretanswer);
        }
        public override void Because()
        {
            _result = subject.GetAll();
        }

        [Test]
        public void Request_is_routed_through_repository()
        {
            _secretanswerRepository.Received(1).GetAll();

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.ShouldBeOfType<List<SecretAnswer>>();

            List<SecretAnswer> resultList = _result as List<SecretAnswer>;

            resultList.Count.ShouldBe(1);

            resultList.ShouldBe(_all_secretanswer);
        }
    }
}