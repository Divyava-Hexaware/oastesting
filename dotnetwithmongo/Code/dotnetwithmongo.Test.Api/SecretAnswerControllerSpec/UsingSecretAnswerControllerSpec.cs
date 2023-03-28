using NSubstitute;
using dotnetwithmongo.Test.Framework;
using dotnetwithmongo.Api.Controllers;
using dotnetwithmongo.BusinessServices.Interfaces;
using AutoMapper;
using dotnetwithmongo.BusinessEntities.Entities;
using dotnetwithmongo.Contracts.DTO;


namespace dotnetwithmongo.Test.Api.SecretAnswerControllerSpec
{
    public abstract class UsingSecretAnswerControllerSpec : SpecFor<SecretAnswerController>
    {
        protected ISecretAnswerService _secretanswerService;
        protected IMapper _mapper;

        public override void Context()
        {
            _secretanswerService = Substitute.For<ISecretAnswerService>();
            _mapper = Substitute.For<IMapper>();
            subject = new SecretAnswerController(_secretanswerService,_mapper);

        }

    }
}
