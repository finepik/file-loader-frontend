import './App.css'
import { ChakraProvider, Container, useToast } from '@chakra-ui/react'
import UploadDatabase from './components/Forms/UploadDatabase/UploadDatabase'
import theme from './theme'
import { useEffect, useState } from 'react'
import apiClient from './axios'
import sendMessage from './api/sendMessage'


function App() {

  // const [isResponse, setIsResponse] = useState(false)

  const [ip,setIP] = useState('');
    
    //creating function to load ip address from the API
    const getData = async()=>{
        const res = await apiClient.get('https://geolocation-db.com/json/')
        console.log(res.data);
        setIP(res.data.IPv4)
    }
    
    useEffect(()=>{
        //passing getData method to the lifecycle method
        getData()
    },[])

  const toast = useToast()

  const saveBase = (data) => {
    const {isSuccess, formValue} = data

    if (isSuccess) {
      let formData = new FormData()
      console.log(formValue)
      formData.append("ip", '1234956')
      formData.append('file', formValue.intro)
      formData.append('object_name', formValue.objectName)
      formData.append('equipment_name', formValue.equipmentsName)
      sendMessage(formData)
      apiClient.post('/upload/post/', formData, 
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      )
      .then( res => {
        console.log(res.data)
        console.log(res.status)
        if (res.status === 202) {
          toast({
            title: 'Что-то пошло не так...',
            description: res.data.post,
            status: 'error',
            duration: 12000,
            isClosable: true,
          })
        }
        else {
          toast({
            title: 'Файл отправлен.',
            description: "Файл успешно доставлен на сервер",
            status: 'success',
            duration: 12000,
            isClosable: true,
          })
        }
        
      })
      .catch( err => {
        console.log(err)
        toast({
          title: 'Что-то пошло не так...',
          description: 'проверьте сервер',
          status: 'error',
          duration: 12000,
          isClosable: true,
        })
      })
      .finally(() => {
        // setIsResponse(false)
      })
    }
    
}

  return (
    <ChakraProvider theme={theme}>
      <Container maxW='xl' m='0 auto'>
        <UploadDatabase formHandler={saveBase}/>
      </Container>
    </ChakraProvider>
    
  )
}

export default App
