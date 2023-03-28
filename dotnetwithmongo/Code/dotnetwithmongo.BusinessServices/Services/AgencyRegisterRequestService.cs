using dotnetwithmongo.BusinessServices.Interfaces;
using dotnetwithmongo.Data.Interfaces;
using dotnetwithmongo.BusinessEntities.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace dotnetwithmongo.BusinessServices.Services
{
    public class AgencyRegisterRequestService : IAgencyRegisterRequestService
    {
        readonly IAgencyRegisterRequestRepository _AgencyRegisterRequestRepository;

        public AgencyRegisterRequestService(IAgencyRegisterRequestRepository AgencyRegisterRequestRepository)
        {
           this._AgencyRegisterRequestRepository = AgencyRegisterRequestRepository;
        }
        public IEnumerable<AgencyRegisterRequest> GetAll()
        {
            return _AgencyRegisterRequestRepository.GetAll();
        }

        public AgencyRegisterRequest Get(string id)
        {
            return _AgencyRegisterRequestRepository.Get(id);
        }

        public AgencyRegisterRequest Save(AgencyRegisterRequest agencyregisterrequest)
        {
            _AgencyRegisterRequestRepository.Save(agencyregisterrequest);
            return agencyregisterrequest;
        }

        public AgencyRegisterRequest Update(string id, AgencyRegisterRequest agencyregisterrequest)
        {
            return _AgencyRegisterRequestRepository.Update(id, agencyregisterrequest);
        }

        public bool Delete(string id)
        {
            return _AgencyRegisterRequestRepository.Delete(id);
        }

    }
}
