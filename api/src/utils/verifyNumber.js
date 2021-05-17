function verifyNumber(fields){   
      const numberFields = [];
      for (let field of fields) {        
        if (!Number.isInteger(field.value)) {
          numberFields.push(`"${field.fieldName}"`);
        }
      }
      return numberFields;
}
module.exports = verifyNumber