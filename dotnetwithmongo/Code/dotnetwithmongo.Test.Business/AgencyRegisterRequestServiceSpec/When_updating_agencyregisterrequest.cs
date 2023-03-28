using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using NSubstitute;
using Shouldly;
using dotnetwithmongo.BusinessEntities.Entities;


namespace dotnetwithmongo.Test.Business.AgencyRegisterRequestServiceSpec
{
    public class When_updating_agencyregisterrequest : UsingAgencyRegisterRequestServiceSpec
    {
        private AgencyRegisterRequest _result;
        private AgencyRegisterRequest _agencyregisterrequest;

        public override void Context()
        {
            base.Context();

            _agencyregisterrequest = new AgencyRegisterRequest
            {
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
                HasAcceptedEula = false
            };

            _agencyregisterrequestRepository.Update(_agencyregisterrequest.Id, _agencyregisterrequest).Returns(_agencyregisterrequest);
            
        }
        public override void Because()
        {
            _result = subject.Update(_agencyregisterrequest.Id, _agencyregisterrequest);
        }

        [Test]
        public void Request_is_routed_through_repository()
        {
            _agencyregisterrequestRepository.Received(1).Update(_agencyregisterrequest.Id, _agencyregisterrequest);

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.ShouldBeOfType<AgencyRegisterRequest>();

            _result.ShouldBe(_agencyregisterrequest);
        }
    }
}