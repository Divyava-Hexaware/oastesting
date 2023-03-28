using System.Collections.Generic;
using dotnetwithmongo.BusinessServices.Interfaces;
using dotnetwithmongo.BusinessEntities.Entities;
using dotnetwithmongo.Contracts.DTO;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;

namespace dotnetwithmongo.Api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AgencyRegisterRequestController : ControllerBase
    {
        readonly IAgencyRegisterRequestService _AgencyRegisterRequestService;
        private readonly IMapper _mapper;
        public AgencyRegisterRequestController(IAgencyRegisterRequestService AgencyRegisterRequestService,IMapper mapper)
        {
            _AgencyRegisterRequestService = AgencyRegisterRequestService;
            _mapper = mapper;
        }

        // GET: api/AgencyRegisterRequest
        [HttpGet]
        public ActionResult<IEnumerable<AgencyRegisterRequestDto>> Get()
        {
            var AgencyRegisterRequestDTOs = _mapper.Map<IEnumerable<AgencyRegisterRequestDto>>(_AgencyRegisterRequestService.GetAll());
            return Ok(AgencyRegisterRequestDTOs);
        }

        [HttpGet("{id}")]
        public ActionResult<AgencyRegisterRequestDto> GetById(string id)
        {
            var AgencyRegisterRequestDTO = _mapper.Map<AgencyRegisterRequestDto>(_AgencyRegisterRequestService.Get(id));
            return Ok(AgencyRegisterRequestDTO);
        }

        [HttpPost]
        public ActionResult<AgencyRegisterRequestDto> Save(AgencyRegisterRequest AgencyRegisterRequest)
        {
            var AgencyRegisterRequestDTOs = _mapper.Map<AgencyRegisterRequestDto>(_AgencyRegisterRequestService.Save(AgencyRegisterRequest));
            return Ok(AgencyRegisterRequestDTOs);
        }

        [HttpPut("{id}")]
        public ActionResult<AgencyRegisterRequestDto> Update([FromRoute] string id, AgencyRegisterRequest AgencyRegisterRequest)
        {
            var AgencyRegisterRequestDTOs = _mapper.Map<AgencyRegisterRequestDto>(_AgencyRegisterRequestService.Update(id, AgencyRegisterRequest));
            return Ok(AgencyRegisterRequestDTOs);
        }

        [HttpDelete("{id}")]
        public ActionResult<bool> Delete([FromRoute] string id)
        {
            bool res = _AgencyRegisterRequestService.Delete(id);
            return Ok(res);
    }


    }
}
