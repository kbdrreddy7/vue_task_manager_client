import {exportFile} from 'quasar'
import {notificationService,utilService} from '.'

export const wrapCsvValue =(val, formatFn)=> {
    let formatted = formatFn !== void 0
      ? formatFn(val)
      : val
  
    formatted = formatted === void 0 || formatted === null
      ? ''
      : String(formatted)
  
    formatted = formatted.split('"').join('""')
    /**
     * Excel accepts \n and \r in strings, but some other CSV parsers do not
     * Uncomment the next two lines to escape new lines
     */
    // .split('\n').join('\\n')
    // .split('\r').join('\\r')
  
    return `"${formatted}"`
  }

export const exportToCSV=({columns,data,fileName='table-data'})=>{

    // naive encoding to csv format
    const content = [ columns.map(col => wrapCsvValue(col.label)) ].concat(
        data.map(row => columns.map(col => wrapCsvValue(
          typeof col.field === 'function'
            ? col.field(row)
            : row[col.field === void 0 ? col.name : col.field],
          col.format
        )).join(','))
      ).join('\r\n')

      const status = exportFile(
        fileName+'-'+utilService.formatDate(new Date(),'fmt2')+'.csv',
        content,
        'text/csv'
      )

      if (status !== true) 
      notificationService.warning({message:'Browser denied file download...'})
      
}

export default{
    exportToCSV
}