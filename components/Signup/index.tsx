import { useToast, Button } from "@chakra-ui/react"

export const  SignUpButton=() =>{
  const toast = useToast()
  return (
    <Button color="black"
      onClick={() =>
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      }
    >
    Sign Up!
    </Button>
  )
}