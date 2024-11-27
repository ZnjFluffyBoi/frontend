import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {useNavigate} from "react-router-dom"
import {useMutation} from "react-query"
import { loginAPI, registerAPI } from "../api/auth"
import {useRef , useEffect} from "react"

export default function LoginPage() {

  const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    const navigate = useNavigate()

    useEffect(() => {
        if (sessionStorage.getItem("accessToken")) {
            navigate("/app")
        }
    }, [])

    const loginMutation = useMutation({
        mutationFn: loginAPI,
        onSuccess: (data) => {
            console.log(data)
            if (data.access) {
                sessionStorage.setItem("accessToken", data.access)
                navigate("/app")
            }
            else {
                console.log("Invalid credentials")
            }
        }
    })

    const handleLogin = () => {
        const formData = new FormData()
        formData.append("username", usernameRef.current.value)
        formData.append("password", passwordRef.current.value)
        console.log(usernameRef.current.value)
        console.log(passwordRef.current.value)
        loginMutation.mutate(formData)
    }

    const registerMustation = useMutation({
      mutationFn: registerAPI,
      onSuccess: (data) => {
          if (data.ok) {
              console.log('Username: ', usernameRef.current.value)
              console.log('Password: ', passwordRef.current.value)
              handleLogin()
          }
          else {
              console.log("Something went wrong...")
          }
      }
  })

  const handleRegister = () => {
      const formData = new FormData()
      formData.append("username", usernameRef.current.value)
      formData.append("email", emailRef.current.value)
      formData.append("password", passwordRef.current.value)
      formData.append("password_confirmation", passwordConfirmationRef.current.value)
      console.log(usernameRef.current.value)
      console.log(emailRef.current.value)
      console.log(passwordRef.current.value)
      registerMustation.mutate(formData)
  }

  return (
    <main className="relative flex min-h-screen text-white overflow-hidden">
      <div className="fixed inset-0">
        <img 
          src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2342&auto=format&fit=crop"
          alt="Galaxy background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-black/50 to-blue-900/50" />
        
        <div className="absolute inset-0 bg-[radial-gradient(white,_rgba(255,255,255,.2)_2px,_transparent_2px)] bg-[length:50px_50px] animate-twinkle" />
      </div>

      <div className="fixed top-8 left-8 z-50 flex gap-6 items-center animate-float">
        <div className="relative">
          <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full" />
          <img
            className="w-20 h-20 rounded-full border-2 border-purple-500/50 hover:border-purple-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/20 relative z-10"
            src="https://prod-eurasian-res.popmart.com/default/1_91J1BWpBKQ_1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp"
            alt="Space Molly Logo"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
            Space Molly
          </span>
          <span className="text-sm text-purple-300/80">Enter the Collectible Universe</span>
        </div>
      </div>

      {/* Login/Register container */}
      <div className="relative z-10 flex-1 flex items-center justify-center p-8">
        <Tabs defaultValue="login" className="w-[450px]">
          <TabsList className="grid w-full grid-cols-2 bg-slate-800/30 backdrop-blur-md border border-purple-500/20 rounded-lg mb-4">
            <TabsTrigger 
              value="login" 
              className="text-purple-300 data-[state=active]:bg-purple-600/20 data-[state=active]:text-white transition-all duration-300"
            >
              Log In
            </TabsTrigger>
            <TabsTrigger 
              value="register" 
              className="text-purple-300 data-[state=active]:bg-purple-600/20 data-[state=active]:text-white transition-all duration-300"
            >
              Register
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card className="bg-slate-800/30 backdrop-blur-md border border-purple-500/20 shadow-xl shadow-purple-500/10">
              <CardHeader>
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Welcome Back, Explorer
                </CardTitle>
                <CardDescription className="text-purple-300/80">
                  Access your cosmic collection
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="user" className="text-purple-200">Username</Label>
                  <Input 
                    id="user"
                    className="bg-slate-900/50 border-purple-500/30 text-purple-100 placeholder:text-purple-300/50 focus:border-purple-400 transition-all duration-300"
                    placeholder="Enter your Cosmic Name"
                    ref={usernameRef}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-purple-200">Password</Label>
                  <Input 
                    id="password"
                    type="password"
                    className="bg-slate-900/50 border-purple-500/30 text-purple-100 placeholder:text-purple-300/50 focus:border-purple-400 transition-all duration-300"
                    placeholder="Enter your StarCode" 
                    ref={passwordRef}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-500/20" onClick={handleLogin}>
                  Enter
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="register">
            <Card className="bg-slate-800/30 backdrop-blur-md border border-purple-500/20 shadow-xl shadow-purple-500/10">
              <CardHeader>
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Join the Galaxy
                </CardTitle>
                <CardDescription className="text-purple-300/80">
                  Begin your cosmic journey
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-purple-200">Email</Label>
                  <Input 
                    id="email" 
                    type="email"
                    className="bg-slate-900/50 border-purple-500/30 text-purple-100 placeholder:text-purple-300/50 focus:border-purple-400 transition-all duration-300"
                    placeholder="Your email address"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="createusername" className="text-purple-200">Create Username</Label>
                  <Input 
                    id="createusername" 
                    className="bg-slate-900/50 border-purple-500/30 text-purple-100 placeholder:text-purple-300/50 focus:border-purple-400 transition-all duration-300"
                    placeholder="Choose your cosmic identity"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="createpassword" className="text-purple-200">Create Password</Label>
                  <Input 
                    id="createpassword" 
                    type="password"
                    className="bg-slate-900/50 border-purple-500/30 text-purple-100 placeholder:text-purple-300/50 focus:border-purple-400 transition-all duration-300"
                    placeholder="Your secret starcode"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="createpassword" className="text-purple-200">Confirm Password</Label>
                  <Input 
                    id="confirmpassword" 
                    type="password"
                    className="bg-slate-900/50 border-purple-500/30 text-purple-100 placeholder:text-purple-300/50 focus:border-purple-400 transition-all duration-300"
                    placeholder="Confirm starcode"
                  />
                </div>
              </CardContent>
              <CardFooter>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-500/20">
                  SAVE
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
