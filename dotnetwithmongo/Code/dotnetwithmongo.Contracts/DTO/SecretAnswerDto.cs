using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes; 
using System.Runtime.Serialization; 
namespace dotnetwithmongo.Contracts.DTO {
   public class SecretAnswerDto { 
     public string Id { get; set; }
        public int QuestionId { get; set; } 
        public string Answer { get; set; } 
} 
}
