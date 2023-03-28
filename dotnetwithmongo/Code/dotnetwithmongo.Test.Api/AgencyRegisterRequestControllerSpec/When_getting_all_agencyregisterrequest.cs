using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using NSubstitute;
using Shouldly;
using Microsoft.AspNetCore.Mvc;
using dotnetwithmongo.BusinessEntities.Entities;
using dotnetwithmongo.Contracts.DTO;

namespace dotnetwithmongo.Test.Api.AgencyRegisterRequestControllerSpec
{
    public class When_getting_all_agencyregisterrequest : UsingAgencyRegisterRequestControllerSpec
    {
        private ActionResult<IEnumerable<AgencyRegisterRequestDto>> _result;

        private IEnumerable<AgencyRegisterRequest> _all_agencyregisterrequest;
        private AgencyRegisterRequest _agencyregisterrequest;

        private IEnumerable<AgencyRegisterRequestDto>  _all_agencyregisterrequestDto;
        private AgencyRegisterRequestDto _agencyregisterrequestDto;
    

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
                    HasAcceptedEula = true
                };

            _all_agencyregisterrequest = new List<AgencyRegisterRequest> { _agencyregisterrequest};
            _agencyregisterrequestService.GetAll().Returns(_all_agencyregisterrequest);
            _all_agencyregisterrequestDto  = new List<AgencyRegisterRequestDto> {_agencyregisterrequestDto};
            _mapper.Map<IEnumerable<AgencyRegisterRequestDto>>(_all_agencyregisterrequest).Returns( _all_agencyregisterrequestDto);
        }
        public override void Because()
        {
            _result = subject.Get();
        }

        [Test]
        public void Request_is_routed_through_service()
        {
            _agencyregisterrequestService.Received(1).GetAll();

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.Result.ShouldBeOfType<OkObjectResult>();

            var resultListObject = (_result.Result as OkObjectResult).Value;

            resultListObject.ShouldBeOfType<List<AgencyRegisterRequestDto>>();

            List<AgencyRegisterRequestDto> resultList = resultListObject as List<AgencyRegisterRequestDto>;

            resultList.Count.ShouldBe(1);

            resultList.ShouldBe(_all_agencyregisterrequestDto);
        }
    }
}