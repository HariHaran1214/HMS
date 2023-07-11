import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import { Link, useNavigate } from 'react-router-dom';

// Create styles
const styles = StyleSheet.create({
    page: {
      padding: 20,
      paddingLeft:50
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
      marginTop:30,
      textDecoration:'underline'
    },
    address: {
      marginBottom: 10,
    },
    content: {
      marginBottom: 20,
    },
    footer:{
        flexDirection:'row',
        marginTop:60,
        justifyContent:'space-between'
    }
  });
let date = new Date

let today = date.getDate().toString() + "/" + date.getMonth().toString()+ "/" +date.getFullYear().toString();

const id = localStorage.getItem('pid')
const p = localStorage.getItem('form')
const form = JSON.parse(p)
console.log(id,form)

// Create Document Component
const MyDocument = () => (
    <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Patient Information</Text>
      <Text style={styles.address}>
        Patient Id : {id}
        {'\n'}
        Full Name : {form.fullname}
        {'\n'}
        Age : {form.age}
        {'\n'}
        Gender : {form.gender}
        {'\n'}
        Address : {form.address}
        {'\n'}
        Phone no : {form.phone}
        {'\n'}
        Email : {form.email}
        {'\n'}
      </Text>
      <Text style={styles.title}>Seen By</Text>
      <Text style={styles.content}>
        {`Doctor: ${form.doctorid}\n`}
        {`Doctor's Note: ${form.doctornote}\n`}
      </Text>
      <Text style={styles.title}>Prescribtion</Text>
      <Text style={styles.content}>
        {`Prescription: ${form.prescribtion}\n`}
      </Text>
      <View style={styles.footer}>
        <Text>Gaurdian/parent Sign</Text>
        <Text>Hospital Seal</Text>
      </View>
    </Page>
  </Document>
);

const  OpPdf = () =>{
    const navigate = useNavigate()
    return(
        <div className='h-screen flex flex-col justify-start items-center'>
            <PDFViewer className='h-[80vh] w-full'>
                <MyDocument />
            </PDFViewer>
            <button className='mt-10 text-blue-800 font-bold text-lg underline' onClick={()=>{
                localStorage.clear('form')
                navigate('/addop')
            }}>
                Go Back to Add page
            </button>
        </div>
    )
}

export default OpPdf