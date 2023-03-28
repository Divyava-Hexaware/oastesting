using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace dotnetwithmongo.BusinessEntities.Entities
{
    [BsonIgnoreExtraElements]
    public class SecretAnswer
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id  { get; set; }
        public int QuestionId  { get; set; }
        public string Answer  { get; set; }
        
    }

}
