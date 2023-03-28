using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes; 
using System.Runtime.Serialization; 
namespace dotnetwithmongo.Contracts.DTO {
   public class AgencyRegisterRequestDto { 
     public string Id { get; set; }
        public string AgencyName { get; set; } 
        public string FirstName { get; set; } 
        public string LastName { get; set; } 
        public string TaxId { get; set; } 
        public string NPN { get; set; } 
        public string WritingCode { get; set; } 
        public string UserName { get; set; } 
        public string Password { get; set; } 
        public string SecretImage { get; set; } 
        public string Email { get; set; } 
        public string Phone { get; set; } 
        public bool HasAcceptedEula { get; set; } 
} 
}
