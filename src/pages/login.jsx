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





export default function LoginPage() {
  return (
    <main className="h-screen w-screen flex justify-end bg- p-[7%] bg-[#feefd2]" style={{ backgroundImage: `url(https://tse3.mm.bing.net/th?id=OIG1.9HW8GFK4jDQYuVttnrAt&pid=ImgGn)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
      <Tabs defaultValue="login" className="w-[400px] mr-[7rem]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Log In</TabsTrigger>
        <TabsTrigger value="register">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>Log In</CardTitle>
            <CardDescription>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="user">User</Label>
              <Input id="user"/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password"/>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Enter</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="register">
        <Card>
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="createusername">Create Username</Label>
              <Input id="createusername" type="register" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="createpassword">Create Password</Label>
              <Input id="createpassword" type="register" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="register" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
    </main>
  );
}
