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

namespace dotnetwithmongo.Test.Api.AgencyRegisterRequestControllerSpec
{
    public class When_updating_agencyregisterrequest : UsingAgencyRegisterRequestControllerSpec
    {
        private ActionResult<AgencyRegisterRequestDto > _result;
        private AgencyRegisterRequest _agencyregisterrequest;
        private AgencyRegisterRequestDto _agencyregisterrequestDto;

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

            _agencyregisterrequestDto = new AgencyRegisterRequestDto{
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

            _agencyregisterrequestService.Update(_agencyregisterrequest.Id, _agencyregisterrequest).Returns(_agencyregisterrequest);
            _mapper.Map<AgencyRegisterRequestDto>(_agencyregisterrequest).Returns(_agencyregisterrequestDto);
            
        }
        public override void Because()
        {
            _result = subject.Update(_agencyregisterrequest.Id, _agencyregisterrequest);
        }

        [Test]
        public void Request_is_routed_through_service()
        {
            _agencyregisterrequestService.Received(1).Update(_agencyregisterrequest.Id, _agencyregisterrequest);

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.Result.ShouldBeOfType<OkObjectResult>();

            var resultListObject = (_result.Result as OkObjectResult).Value;

            resultListObject.ShouldBeOfType<AgencyRegisterRequestDto>();

            var resultList = resultListObject as AgencyRegisterRequestDto;

            resultList.ShouldBe(_agencyregisterrequestDto);
        }
    }
}