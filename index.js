const parse = require('csv-parse')
const fs = require('fs')

const csvDataString = fs.readFileSync(`${__dirname}/data/brokers.csv`, 'utf-8')

console.log(csvDataString);

const configObj = {
  trim: true,
  ltrim: true,
  cast : true,
  columns: true,
  skip_empty_lines : true
}
parse(csvDataString, configObj, (err, data)=>{

  const jsonDataString = JSON.stringify(data, null, 3)
  console.log('Writing File...');
  fs.writeFileSync(`${__dirname}/json/output.json`, jsonDataString, 'utf8' )
  return data
})
