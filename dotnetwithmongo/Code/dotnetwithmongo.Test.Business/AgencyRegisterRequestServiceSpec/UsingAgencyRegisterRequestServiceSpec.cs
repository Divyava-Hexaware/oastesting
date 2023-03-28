using NSubstitute;
using dotnetwithmongo.Test.Framework;
using dotnetwithmongo.BusinessServices.Services;
using dotnetwithmongo.Data.Interfaces;

namespace dotnetwithmongo.Test.Business.AgencyRegisterRequestServiceSpec
{
    public abstract class UsingAgencyRegisterRequestServiceSpec : SpecFor<AgencyRegisterRequestService>
    {
        protected IAgencyRegisterRequestRepository _agencyregisterrequestRepository;

        public override void Context()
        {
            _agencyregisterrequestRepository = Substitute.For<IAgencyRegisterRequestRepository>();
            subject = new AgencyRegisterRequestService(_agencyregisterrequestRepository);

        }

    }
}