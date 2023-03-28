using NSubstitute;
using dotnetwithmongo.Test.Framework;
using dotnetwithmongo.BusinessServices.Services;
using dotnetwithmongo.Data.Interfaces;

namespace dotnetwithmongo.Test.Business.SecretAnswerServiceSpec
{
    public abstract class UsingSecretAnswerServiceSpec : SpecFor<SecretAnswerService>
    {
        protected ISecretAnswerRepository _secretanswerRepository;

        public override void Context()
        {
            _secretanswerRepository = Substitute.For<ISecretAnswerRepository>();
            subject = new SecretAnswerService(_secretanswerRepository);

        }

    }
}