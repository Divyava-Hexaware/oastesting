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
    public class SecretAnswerController : ControllerBase
    {
        readonly ISecretAnswerService _SecretAnswerService;
        private readonly IMapper _mapper;
        public SecretAnswerController(ISecretAnswerService SecretAnswerService,IMapper mapper)
        {
            _SecretAnswerService = SecretAnswerService;
            _mapper = mapper;
        }

        // GET: api/SecretAnswer
        [HttpGet]
        public ActionResult<IEnumerable<SecretAnswerDto>> Get()
        {
            var SecretAnswerDTOs = _mapper.Map<IEnumerable<SecretAnswerDto>>(_SecretAnswerService.GetAll());
            return Ok(SecretAnswerDTOs);
        }

        [HttpGet("{id}")]
        public ActionResult<SecretAnswerDto> GetById(string id)
        {
            var SecretAnswerDTO = _mapper.Map<SecretAnswerDto>(_SecretAnswerService.Get(id));
            return Ok(SecretAnswerDTO);
        }

        [HttpPost]
        public ActionResult<SecretAnswerDto> Save(SecretAnswer SecretAnswer)
        {
            var SecretAnswerDTOs = _mapper.Map<SecretAnswerDto>(_SecretAnswerService.Save(SecretAnswer));
            return Ok(SecretAnswerDTOs);
        }

        [HttpPut("{id}")]
        public ActionResult<SecretAnswerDto> Update([FromRoute] string id, SecretAnswer SecretAnswer)
        {
            var SecretAnswerDTOs = _mapper.Map<SecretAnswerDto>(_SecretAnswerService.Update(id, SecretAnswer));
            return Ok(SecretAnswerDTOs);
        }

        [HttpDelete("{id}")]
        public ActionResult<bool> Delete([FromRoute] string id)
        {
            bool res = _SecretAnswerService.Delete(id);
            return Ok(res);
    }


    }
}
