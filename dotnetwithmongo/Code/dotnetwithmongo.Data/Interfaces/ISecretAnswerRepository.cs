using dotnetwithmongo.BusinessEntities.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace dotnetwithmongo.Data.Interfaces
{
    public interface ISecretAnswerRepository : IGetAll<SecretAnswer>,IGet<SecretAnswer,string>, ISave<SecretAnswer>, IUpdate<SecretAnswer, string>, IDelete<string>
    {
    }
}
