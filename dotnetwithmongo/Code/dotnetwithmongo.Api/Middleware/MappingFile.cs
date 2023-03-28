using dotnetwithmongo.BusinessEntities.Entities;
using dotnetwithmongo.Contracts.DTO;
using AutoMapper;
namespace dotnetwithmongo.Api.Middleware
{
public class MappingFile : Profile
{
    public MappingFile()
    {
        // Mapping variables
		CreateMap<AgencyRegisterRequest , AgencyRegisterRequestDto>(); 
		CreateMap<SecretAnswer , SecretAnswerDto>(); 
    }
  }
}
