using dotnetwithmongo.BusinessEntities.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace dotnetwithmongo.BusinessServices.Interfaces
{
    public interface ISecretAnswerService
    {      
        IEnumerable<SecretAnswer> GetAll();
        SecretAnswer Get(string id);
        SecretAnswer Save(SecretAnswer secretanswer);
        SecretAnswer Update(string id, SecretAnswer secretanswer);
        bool Delete(string id);

    }
}
