using dotnetwithmongo.Data.Interfaces;
using dotnetwithmongo.BusinessEntities.Entities;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Core.Bindings;
using System;
using System.Collections.Generic;
using System.Text;

namespace dotnetwithmongo.Data.Repositories
{
    public class AgencyRegisterRequestRepository : IAgencyRegisterRequestRepository
    {
        private readonly IGateway _gateway;
        private readonly string _collectionName = "AgencyRegisterRequest";

        public AgencyRegisterRequestRepository(IGateway gateway)
        {
            _gateway = gateway;
        }
        public IEnumerable<AgencyRegisterRequest> GetAll()
        {
            var result = _gateway.GetMongoDB().GetCollection<AgencyRegisterRequest>(_collectionName)
                            .Find(new BsonDocument())
                            .ToList();
            return result;
        }

        public AgencyRegisterRequest Get(string id)
        {
            var result = _gateway.GetMongoDB().GetCollection<AgencyRegisterRequest>(_collectionName)
                            .Find(x => x.Id == id).Single();
            return result;
        }

        public bool Save(AgencyRegisterRequest entity)
        {
            _gateway.GetMongoDB().GetCollection<AgencyRegisterRequest>(_collectionName)
                .InsertOne(entity);
            return true;
        }

        public AgencyRegisterRequest Update(string id, AgencyRegisterRequest entity)
        {
            var update = Builders<AgencyRegisterRequest>.Update
                .Set(e => e.AgencyName, entity.AgencyName )
                .Set(e => e.FirstName, entity.FirstName )
                .Set(e => e.LastName, entity.LastName )
                .Set(e => e.TaxId, entity.TaxId )
                .Set(e => e.NPN, entity.NPN )
                .Set(e => e.WritingCode, entity.WritingCode )
                .Set(e => e.UserName, entity.UserName )
                .Set(e => e.Password, entity.Password )
                .Set(e => e.SecretImage, entity.SecretImage )
                .Set(e => e.Email, entity.Email )
                .Set(e => e.Phone, entity.Phone )
                .Set(e => e.HasAcceptedEula, entity.HasAcceptedEula );

            var result = _gateway.GetMongoDB().GetCollection<AgencyRegisterRequest>(_collectionName)
                .FindOneAndUpdate(e => e.Id == id, update);
            return result;
        }

        public bool Delete(string id)
        {
            var result = _gateway.GetMongoDB().GetCollection<AgencyRegisterRequest>(_collectionName)
                         .FindOneAndDelete(e => e.Id == id);
            if(result==null) return false;             
            return true;
        }
    }
}
