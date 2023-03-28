using NSubstitute;
using dotnetwithmongo.Test.Framework;
using dotnetwithmongo.Api.Controllers;
using dotnetwithmongo.BusinessServices.Interfaces;
using AutoMapper;
using dotnetwithmongo.BusinessEntities.Entities;
using dotnetwithmongo.Contracts.DTO;


namespace dotnetwithmongo.Test.Api.AgencyRegisterRequestControllerSpec
{
    public abstract class UsingAgencyRegisterRequestControllerSpec : SpecFor<AgencyRegisterRequestController>
    {
        protected IAgencyRegisterRequestService _agencyregisterrequestService;
        protected IMapper _mapper;

        public override void Context()
        {
            _agencyregisterrequestService = Substitute.For<IAgencyRegisterRequestService>();
            _mapper = Substitute.For<IMapper>();
            subject = new AgencyRegisterRequestController(_agencyregisterrequestService,_mapper);

        }

    }
}
