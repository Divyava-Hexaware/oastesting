using dotnetwithmongo.BusinessEntities.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace dotnetwithmongo.BusinessServices.Interfaces
{
    public interface IAgencyRegisterRequestService
    {      
        IEnumerable<AgencyRegisterRequest> GetAll();
        AgencyRegisterRequest Get(string id);
        AgencyRegisterRequest Save(AgencyRegisterRequest agencyregisterrequest);
        AgencyRegisterRequest Update(string id, AgencyRegisterRequest agencyregisterrequest);
        bool Delete(string id);

    }
}
