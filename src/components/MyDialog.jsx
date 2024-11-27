// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogHeader,
//     DialogTitle,
// } from "@/components/ui/dialog"
// import { Button } from "@/components/ui/button"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import LiveBg from "../assets/live-bg.gif"
// import { useRef, useState, useEffect } from "react"

// import { retrieveProfiles, createProfiles, updateProfiles, deleteProfiles } from "../api/profiles"

// function MyCustomDialog({ data, open, setOpen, reloader, setReloader, key, children, ...props }) {
//     const [students, setStudents] = useState([data])

//     // Value references
//     const studentNameRef = useRef(null)
//     const gradeRef = useRef(null)
//     const sectionRef = useRef(null)
//     const statusRef = useRef(null)

//     const updateStudentIdRef = useRef(null)
//     const updateStudentNameRef = useRef(null)
//     const updateGradeRef = useRef(null)
//     const updateSectionRef = useRef(null)
//     const updateStatusRef = useRef(null)

//     useEffect(() => {
//         retrieveProfiles()
//             .then(res => {
//                 if (res.ok) {
//                     setStudents(res.data)
//                 }
//             })
//     }, [reloader])

//     const handleAdd = () => {
//         const postData = { studentName: studentNameRef.current.value, grade: gradeRef.current.value, section: sectionRef.current.value, status: statusRef.current.value }

//         createProfiles(postData).then(res => {
//             if (res.ok) {
//                 setReloader(!reloader)
//                 setOpen(false)
//             } else {
//                 console.log(res.errors)
//             }
//         })
//     }

//     const handleUpdate = (Id) => {
//         const patchData = { id: Id, studentName: updateStudentNameRef.current.value, grade: updateGradeRef.current.value, section: updateSectionRef.current.value, status: updateStatusRef.current.value }

//         updateProfiles(patchData).then(res => {
//             if (res.ok) {
//                 setReloader(!reloader)
//                 setOpen(false)
//             } else {
//                 console.log(res.errors)
//             }
//         })
//     }

//     const handleDelete = (Id) => {
//         const deleteData = { id: Id }

//         deleteProfiles(deleteData).then(res => {
//             if (res.ok) {
//                 setReloader(!reloader)
//                 setOpen(false)
//             } else {
//                 console.log(res.errors)
//             }
//         })
//     }

//     return (
//         <Dialog open={open} onOpenChange={setOpen} key={key}>
//             <DialogContent className="flex flex-col justify-between items-center pt-[3rem] px-2 h-[70vh] w-[70vw] bg-cover bg-center" style={{ backgroundImage: `url(${LiveBg})` }}>
//                 <DialogHeader>
//                     <DialogTitle className="text-white text-4xl text-center">{data?.title}</DialogTitle>
//                     <DialogDescription className="text-white text-[1rem] text-center">{data?.description}</DialogDescription>
//                 </DialogHeader>
//                 <ScrollArea className="py-2 px-1 w-[70%] flex flex-col gap-2 bg-black text-[1.2rem] text-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border-y border-gray-100">

//                     {data.title === 'ADD' && (
//                         <div className="flex flex-col items-center gap-2">
//                             <section className="flex justify-between w-[90%] gap-2">
//                                 <label className="w-[30%]">Full Name</label>
//                                 <input type="text" className="w-[70%] bg-transparent border-b-[2px] px-2" ref={studentNameRef} />
//                             </section>
//                             <section className="flex justify-between w-[90%] gap-2">
//                                 <label className="w-[30%]">Grade</label>
//                                 <input type="text" className="w-[70%] bg-transparent border-b-[2px] px-2" ref={gradeRef} />
//                             </section>
//                             <section className="flex justify-between w-[90%] gap-2">
//                                 <label className="w-[30%]">Section</label>
//                                 <input type="text" className="w-[70%] bg-transparent border-b-[2px] px-2" ref={sectionRef} />
//                             </section>
//                             <section className="flex justify-between w-[90%] gap-2">
//                                 <label className="w-[30%]">Status</label>
//                                 <input type="text" className="w-[70%] bg-transparent border-b-[2px] px-2" ref={statusRef} />
//                             </section>
//                         </div>
//                     )}

//                     {data.title === 'EDIT' && (
//                         <div className="flex flex-col items-center gap-2">
//                             <section className="flex justify-between w-[90%] gap-2">
//                                 <label className="w-[30%]">Full Name</label>
//                                 <input type="text" className="w-[70%] bg-transparent border-b-[2px] px-2" defaultValue={data?.studentName} ref={updateStudentNameRef} />
//                             </section>
//                             <section className="flex justify-between w-[90%] gap-2">
//                                 <label className="w-[30%]">Grade</label>
//                                 <input type="text" className="w-[70%] bg-transparent border-b-[2px] px-2" defaultValue={data?.grade} ref={updateGradeRef} />
//                             </section>
//                             <section className="flex justify-between w-[90%] gap-2">
//                                 <label className="w-[30%]">Section</label>
//                                 <input type="text" className="w-[70%] bg-transparent border-b-[2px] px-2" defaultValue={data?.section} ref={updateSectionRef} />
//                             </section>
//                             <section className="flex justify-between w-[90%] gap-2">
//                                 <label className="w-[30%]">Status</label>
//                                 <input type="text" className="w-[70%] bg-transparent border-b-[2px] px-2" defaultValue={data?.status} ref={updateStatusRef} />
//                             </section>
//                         </div>
//                     )}

//                     {data.title === 'DELETE' && (
//                         <section className="flex flex-col items-center justify-center">
//                             <h2>Are you sure to delete</h2>
//                             <p>{data?.studentName}</p>
//                             <section className="flex gap-3 mt-6">
//                                 <Button variant="destructive" onClick={() => { handleDelete(data?.id) }}>Yes</Button>
//                                 <Button onClick={() => { setOpen(false) }}>Cancel</Button>
//                             </section>
//                         </section>
//                     )}

//                 </ScrollArea>
//                 <section className="flex gap-4">
//                     {/* Delete button */}
//                     {data.title !== 'DELETE' && (<Button className="text-white" onClick={() => { setOpen(false) }}>Close</Button>)}
//                     {/* Add button */}
//                     {data.title === 'ADD' && (<Button className="text-white" onClick={handleAdd}>Save</Button>)}
//                     {/* Edit button */}
//                     {data.title === 'EDIT' && (<Button className="text-white" onClick={() => {
//                         handleUpdate(data.id)
//                     }}>Save</Button>)}
//                 </section>
//             </DialogContent>
//         </Dialog>
//     )
// }

// export default MyCustomDialog;