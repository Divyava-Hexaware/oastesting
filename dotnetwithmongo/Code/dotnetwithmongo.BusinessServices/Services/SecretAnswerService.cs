using dotnetwithmongo.BusinessServices.Interfaces;
using dotnetwithmongo.Data.Interfaces;
using dotnetwithmongo.BusinessEntities.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace dotnetwithmongo.BusinessServices.Services
{
    public class SecretAnswerService : ISecretAnswerService
    {
        readonly ISecretAnswerRepository _SecretAnswerRepository;

        public SecretAnswerService(ISecretAnswerRepository SecretAnswerRepository)
        {
           this._SecretAnswerRepository = SecretAnswerRepository;
        }
        public IEnumerable<SecretAnswer> GetAll()
        {
            return _SecretAnswerRepository.GetAll();
        }

        public SecretAnswer Get(string id)
        {
            return _SecretAnswerRepository.Get(id);
        }

        public SecretAnswer Save(SecretAnswer secretanswer)
        {
            _SecretAnswerRepository.Save(secretanswer);
            return secretanswer;
        }

        public SecretAnswer Update(string id, SecretAnswer secretanswer)
        {
            return _SecretAnswerRepository.Update(id, secretanswer);
        }

        public bool Delete(string id)
        {
            return _SecretAnswerRepository.Delete(id);
        }

    }
}
