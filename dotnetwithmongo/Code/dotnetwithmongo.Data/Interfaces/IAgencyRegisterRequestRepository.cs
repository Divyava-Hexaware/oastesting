using dotnetwithmongo.BusinessEntities.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace dotnetwithmongo.Data.Interfaces
{
    public interface IAgencyRegisterRequestRepository : IGetAll<AgencyRegisterRequest>,IGet<AgencyRegisterRequest,string>, ISave<AgencyRegisterRequest>, IUpdate<AgencyRegisterRequest, string>, IDelete<string>
    {
    }
}
