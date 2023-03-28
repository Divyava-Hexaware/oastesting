using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using NSubstitute;
using Shouldly;
using dotnetwithmongo.BusinessEntities.Entities;

namespace dotnetwithmongo.Test.Business.AgencyRegisterRequestServiceSpec
{
    public class When_getting_all_agencyregisterrequest : UsingAgencyRegisterRequestServiceSpec
    {
        private IEnumerable<AgencyRegisterRequest> _result;

        private IEnumerable<AgencyRegisterRequest> _all_agencyregisterrequest;
        private AgencyRegisterRequest _agencyregisterrequest;

        public override void Context()
        {
            base.Context();

            _agencyregisterrequest = new AgencyRegisterRequest{
                AgencyName = "AgencyName",
                FirstName = "FirstName",
                LastName = "LastName",
                TaxId = "TaxId",
                NPN = "NPN",
                WritingCode = "WritingCode",
                UserName = "UserName",
                Password = "Password",
                SecretImage = "SecretImage",
                Email = "Email",
                Phone = "Phone",
                HasAcceptedEula = true
            };

            _all_agencyregisterrequest = new List<AgencyRegisterRequest> { _agencyregisterrequest};
            _agencyregisterrequestRepository.GetAll().Returns(_all_agencyregisterrequest);
        }
        public override void Because()
        {
            _result = subject.GetAll();
        }

        [Test]
        public void Request_is_routed_through_repository()
        {
            _agencyregisterrequestRepository.Received(1).GetAll();

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.ShouldBeOfType<List<AgencyRegisterRequest>>();

            List<AgencyRegisterRequest> resultList = _result as List<AgencyRegisterRequest>;

            resultList.Count.ShouldBe(1);

            resultList.ShouldBe(_all_agencyregisterrequest);
        }
    }
}