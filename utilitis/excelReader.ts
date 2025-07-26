import * as XLSX from 'xlsx';

// File -> Workbook -> Sheet -> Data i.e rows and columns
// reading Excel file

// get the excel file path
const excelFilePath = 'test-data/creds.xlsx';

// Read the Excel file
const workbook = XLSX.readFile(excelFilePath);

// Get the first sheet
const spreadSheet = workbook.SheetNames[0];

// Get the exact worksheet
const worksheet = workbook.Sheets[spreadSheet];

// Convert the worksheet to JSON format
const excelLoginData : any = XLSX.utils.sheet_to_json(worksheet)

// get the username and password from the Excel data
// Assuming the first row contains the email and password
const username = excelLoginData[0].username;
const password = excelLoginData[0].password;

//console.log('Username:', username);
//console.log('Password:', password);

// Export the data
export const readExcelData = () => {
    return { username, password };
}