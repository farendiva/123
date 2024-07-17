(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[946],{5810:function(e,s,a){Promise.resolve().then(a.bind(a,7560))},7560:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return k}});var l=a(7437),i=a(7818),n=a(9093),d=a(9859),t=a(5773),r=a(8664),o=a(2265),m=a(9343),c=a(7409),p=a(8671),h=a(6463),x=a(176);let g=(0,i.default)(()=>a.e(5629).then(a.bind(a,5629)),{loadableGenerated:{webpack:()=>[5629]},ssr:!1}),u=[{id:"Step 1",name:"Capture Face",fields:["faceImage"],component:n.Z},{id:"Step 2",name:"Capture KTP",fields:["ktpImage","no_ktp"],component:d.Z},{id:"Step 3",name:"Data Diri",fields:["title","nama_depan","nama_belakang","no_handphone","no_ktp","tempat_lahir","tanggal_lahir","agama","pendidikan_terakhir","noDarurat","ahliWaris","kewarganegaraan","alamat_ktp","provinsi_ktp","kabupaten_ktp","kecamatan_ktp","kelurahan_ktp","alamat_domisili","provinsi_domisili","kabupaten_domisili","kecamatan_domisili","kelurahan_domisili","kodePos_ktp","kodePos_domisili"],component:e=>{var s,a,i,n,d,t,r,h,x,g,u,k,j,b,v,f,_,N,y,w,P,F,K,C;let{register:T,control:S,setValue:U,watch:E,errors:D,ktpImage:R,faceImage:W}=e,[L,A]=(0,o.useState)(!1),{provinces:O,nationalities:G,religions:I,educations:Z,cities:q,districts:B,subdistricts:V,postalCodes:Q,fetchCities:H,fetchDistricts:M,fetchSubDistricts:z,fetchPostalCodes:J}=(0,c.Z)(),X=E("alamat_ktp"),Y=E("provinsi_ktp"),$=E("kabupaten_ktp"),ee=E("kecamatan_ktp"),es=E("kelurahan_ktp"),ea=E("kodePos_ktp"),el=E("provinsi_domisili"),ei=E("kabupaten_domisili"),en=E("kecamatan_domisili");return(0,o.useEffect)(()=>{L&&(U("alamat_domisili",X),U("provinsi_domisili",Y),U("kabupaten_domisili",$),U("kecamatan_domisili",ee),U("kelurahan_domisili",es),U("kodePos_domisili",ea))},[L,X,Y,$,ee,es,ea,U]),(0,o.useEffect)(()=>{Y&&H(Y)},[Y]),(0,o.useEffect)(()=>{$&&M($)},[$]),(0,o.useEffect)(()=>{ee&&(z(ee),J(ee))},[ee]),(0,o.useEffect)(()=>{el&&H(el)},[el]),(0,o.useEffect)(()=>{ei&&M(ei)},[ei]),(0,o.useEffect)(()=>{en&&(z(en),J(en))},[en]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"grid grid-cols-1 gap-x-3 gap-y-4 lg:gap-x-6 lg:gap-y-8 sm:grid-cols-8",children:[(0,l.jsxs)("div",{className:"col-span-4 flex items-center justify-center gap-4 rounded-xl border border-dashed border-[#322783] bg-[#f5f4ff] p-4",children:[W?(0,l.jsxs)("div",{className:"relative w-24 h-24",children:[(0,l.jsx)("img",{className:"w-full h-full rounded-full object-cover",src:W?URL.createObjectURL(W):"",alt:"Foto Wajah"}),(0,l.jsx)("img",{className:"absolute bottom-0 right-0 w-6 h-6",src:"/icons/checkbox.svg",alt:"Verified Icon"})]}):R?(0,l.jsxs)("div",{className:"relative w-56 h-36",children:[(0,l.jsx)("img",{className:"w-full h-full object-contain",src:R?URL.createObjectURL(R):"",alt:"Foto KTP"}),(0,l.jsx)("img",{className:"absolute bottom-0 right-0 w-6 h-6",src:"/icons/checkbox.svg",alt:"Verified Icon"})]}):null,(0,l.jsx)("p",{className:"mt-2 text-sm",children:W?"Foto Wajah":R?"Foto KTP":"No Image"})]}),(0,l.jsxs)("div",{className:"col-span-4 flex items-center justify-center gap-4 rounded-xl border border-dashed border-[#322783] bg-[#f5f4ff] p-4",children:[(0,l.jsxs)("div",{className:"relative w-36",children:[(0,l.jsx)("img",{className:"w-full h-full object-contain",src:R?URL.createObjectURL(R):"",alt:"Foto KTP"}),(0,l.jsx)("img",{className:"absolute bottom-0 right-0 w-6 h-6",src:"/icons/checkbox.svg",alt:"Verified Icon"})]}),(0,l.jsx)("p",{className:"mt-2 text-sm",children:"Foto KTP"})]})]}),(0,l.jsxs)("div",{className:"mt-10 grid grid-cols-1 gap-x-3 gap-y-4 lg:gap-x-6 lg:gap-y-8 sm:grid-cols-8",children:[(0,l.jsxs)("div",{className:"sm:col-span-4 lg:col-span-4",children:[(0,l.jsx)("label",{htmlFor:"no_handphone",className:"block text-sm leading-6 font-bold",children:"Nomor Handphone"}),(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)("input",{id:"no_handphone",type:"tel",...T("no_handphone"),autoComplete:"tel",className:"block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"}),(0,l.jsx)("div",{className:"mt-1 h-1",children:(null===(s=D.no_handphone)||void 0===s?void 0:s.message)&&(0,l.jsx)("p",{className:"text-sm text-red-400",children:D.no_handphone.message})})]})]}),(0,l.jsxs)("div",{className:"sm:col-span-4 lg:col-span-4",children:[(0,l.jsx)("label",{htmlFor:"no_ktp",className:"block text-sm leading-6 font-bold",children:"Nomor Kartu KTP"}),(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)("input",{id:"no_ktp",type:"tel",...T("no_ktp"),autoComplete:"tel",className:"block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"}),(0,l.jsx)("div",{className:"mt-1 h-1",children:(null===(a=D.no_ktp)||void 0===a?void 0:a.message)&&(0,l.jsx)("p",{className:"text-sm text-red-400",children:D.no_ktp.message})})]})]}),(0,l.jsxs)("div",{className:"sm:col-span-2",children:[(0,l.jsx)("label",{htmlFor:"title",className:"block text-sm leading-6 font-bold",children:"Title"}),(0,l.jsxs)("div",{className:"w-full",children:[(0,l.jsxs)("select",{value:E("title")||"",className:"block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6",id:"title",...T("title"),children:[(0,l.jsx)("option",{value:"",disabled:!0,children:"Pilih Title"}),(0,l.jsx)("option",{value:"Pria",children:"Tn."}),(0,l.jsx)("option",{value:"Wanita",children:"Ny."}),(0,l.jsx)("option",{value:"Wanita",children:"Nn."})]}),(0,l.jsx)("div",{className:"mt-1 h-1",children:(null===(i=D.title)||void 0===i?void 0:i.message)&&(0,l.jsx)("p",{className:"text-sm text-red-400",children:D.title.message})})]})]}),(0,l.jsxs)("div",{className:"sm:col-span-3",children:[(0,l.jsx)("label",{htmlFor:"nama_depan",className:"block text-sm leading-6 font-bold",children:"Nama Depan"}),(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)("input",{type:"text",id:"nama_depan",...T("nama_depan"),autoComplete:"given-name",className:"block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"}),(0,l.jsx)("div",{className:"mt-1 h-1",children:(null===(n=D.nama_depan)||void 0===n?void 0:n.message)&&(0,l.jsx)("p",{className:"text-sm text-red-400",children:D.nama_depan.message})})]})]}),(0,l.jsxs)("div",{className:"sm:col-span-3",children:[(0,l.jsx)("label",{htmlFor:"nama_belakang",className:"block text-sm leading-6 font-bold",children:"Nama Belakang"}),(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)("input",{type:"text",id:"nama_belakang",...T("nama_belakang"),autoComplete:"family-name",className:"block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"}),(0,l.jsx)("div",{className:"mt-1 h-1",children:(null===(d=D.nama_belakang)||void 0===d?void 0:d.message)&&(0,l.jsx)("p",{className:"text-sm text-red-400",children:D.nama_belakang.message})})]})]}),(0,l.jsxs)("div",{className:"sm:col-span-4",children:[(0,l.jsx)("label",{htmlFor:"tempat_lahir",className:"block text-sm leading-6 font-bold",children:"Tempat Lahir Sesuai KTP"}),(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)("input",{type:"text",id:"tempat_lahir",...T("tempat_lahir"),autoComplete:"given-name",className:"block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"}),(0,l.jsx)("div",{className:"mt-1 h-1",children:(null===(t=D.tempat_lahir)||void 0===t?void 0:t.message)&&(0,l.jsx)("p",{className:"text-sm text-red-400",children:D.tempat_lahir.message})})]})]}),(0,l.jsxs)("div",{className:"sm:col-span-4",children:[(0,l.jsx)("label",{htmlFor:"tanggal_lahir",className:"block text-sm leading-6 font-bold",children:"Tanggal Lahir Sesuai KTP"}),(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)(m.Qr,{name:"tanggal_lahir",control:S,rules:{required:"Tanggal lahir diperlukan."},render:e=>{let{field:s}=e;return(0,l.jsx)(p.M,{value:s.value,onChange:e=>s.onChange(e)})}}),(0,l.jsx)("div",{className:"mt-1 h-1",children:(null===(r=D.tanggal_lahir)||void 0===r?void 0:r.message)&&(0,l.jsx)("p",{className:"text-sm text-red-400",children:D.tanggal_lahir.message})})]})]}),(0,l.jsxs)("div",{className:"sm:col-span-4",children:[(0,l.jsx)("label",{htmlFor:"agama",className:"block text-sm leading-6 font-bold",children:"Agama"}),(0,l.jsxs)("div",{className:"w-full",children:[(0,l.jsxs)("select",{value:E("agama")||"",className:"block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6",id:"agama",...T("agama"),children:[(0,l.jsx)("option",{value:"",disabled:!0,children:"Pilih Agama"}),I.slice(0,6).map((e,s)=>{let{id:a,agama:i}=e;return(0,l.jsx)("option",{value:a,children:i},s)})]}),(0,l.jsx)("div",{className:"mt-1 h-1",children:(null===(h=D.agama)||void 0===h?void 0:h.message)&&(0,l.jsx)("p",{className:"text-sm text-red-400",children:D.agama.message})})]})]}),(0,l.jsxs)("div",{className:"sm:col-span-4",children:[(0,l.jsx)("label",{htmlFor:"pendidikan_terakhir",className:"block text-sm leading-6 font-bold",children:"Pendidikan Terakhir"}),(0,l.jsxs)("div",{className:"w-full",children:[(0,l.jsxs)("select",{value:E("pendidikan_terakhir")||"",className:"block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6",id:"pendidikan_terakhir",...T("pendidikan_terakhir"),children:[(0,l.jsx)("option",{value:"",disabled:!0,children:"Pilih Pendidikan Terakhir"}),Z.map(e=>(0,l.jsx)("option",{value:e.id,children:e.pendidikan},e.id))]}),(0,l.jsx)("div",{className:"mt-1 h-1",children:(null===(x=D.pendidikan_terakhir)||void 0===x?void 0:x.message)&&(0,l.jsx)("p",{className:"text-sm text-red-400",children:D.pendidikan_terakhir.message})})]})]}),(0,l.jsxs)("div",{className:"sm:col-span-4 lg:col-span-4",children:[(0,l.jsx)("label",{htmlFor:"noDarurat",className:"block text-sm leading-6 font-bold",children:"Nomor Telefon Darurat"}),(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)("input",{id:"noDarurat",type:"tel",...T("noDarurat"),autoComplete:"tel",className:"block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"}),(0,l.jsx)("div",{className:"mt-1 h-1",children:(null===(g=D.noDarurat)||void 0===g?void 0:g.message)&&(0,l.jsx)("p",{className:"text-sm text-red-400",children:D.noDarurat.message})})]})]}),(0,l.jsxs)("div",{className:"sm:col-span-4 lg:col-span-4",children:[(0,l.jsx)("label",{htmlFor:"ahliWaris",className:"block text-sm leading-6 font-bold",children:"Nama Ahli Waris"}),(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)("input",{id:"ahliWaris",type:"tel",...T("ahliWaris"),autoComplete:"tel",className:"block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"}),(0,l.jsx)("div",{className:"mt-1 h-1",children:(null===(u=D.ahliWaris)||void 0===u?void 0:u.message)&&(0,l.jsx)("p",{className:"text-sm text-red-400",children:D.ahliWaris.message})})]})]}),(0,l.jsxs)("div",{className:"sm:col-span-4",children:[(0,l.jsx)("label",{htmlFor:"kewarganegaraan",className:"block text-sm leading-6 font-bold",children:"Pilih Kewarganegaraan"}),(0,l.jsxs)("div",{className:"w-full",children:[(0,l.jsxs)("select",{value:E("kewarganegaraan")||"",className:"block w-full rounded-md border-0 py-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6",id:"kewarganegaraan",...T("kewarganegaraan"),children:[(0,l.jsx)("option",{value:"",disabled:!0,children:"Pilih Kewarganegaraan"}),G.map(e=>(0,l.jsx)("option",{value:e.id,children:e.kewarganegaraan.toUpperCase()},e.id))]}),(0,l.jsx)("div",{className:"mt-1 h-1",children:(null===(k=D.kewarganegaraan)||void 0===k?void 0:k.message)&&(0,l.jsx)("p",{className:"text-sm text-red-400",children:D.kewarganegaraan.message})})]})]})]}),(0,l.jsxs)("div",{className:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8",children:[(0,l.jsxs)("div",{className:"sm:col-span-8",children:[(0,l.jsx)("label",{htmlFor:"alamat_ktp",className:"block text-sm leading-6 font-bold",children:"Alamat Sesuai KTP"}),(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)("input",{type:"text",id:"alamat_ktp",...T("alamat_ktp"),autoComplete:"given-name",className:"block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"}),(0,l.jsx)("div",{className:"mt-1 h-1",children:(null===(j=D.alamat_ktp)||void 0===j?void 0:j.message)&&(0,l.jsx)("p",{className:"text-sm text-red-400",children:D.alamat_ktp.message})})]})]}),(0,l.jsxs)("div",{className:"sm:col-span-4",children:[(0,l.jsx)("label",{htmlFor:"provinsi_ktp",className:"block text-sm leading-6 font-bold",children:"Provinsi"}),(0,l.jsxs)("div",{className:"w-full",children:[(0,l.jsxs)("select",{value:E("provinsi_ktp")||"",className:"block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6",id:"provinsi_ktp",...T("provinsi_ktp"),children:[(0,l.jsx)("option",{value:"",disabled:!0,children:"Pilih Provinsi"}),O.map((e,s)=>(0,l.jsx)("option",{value:e.province_code,children:e.province},s))]}),(0,l.jsx)("div",{className:"mt-1 h-1",children:(null===(b=D.provinsi_ktp)||void 0===b?void 0:b.message)&&(0,l.jsx)("p",{className:"text-sm text-red-400",children:D.provinsi_ktp.message})})]})]}),(0,l.jsxs)("div",{className:"sm:col-span-4",children:[(0,l.jsx)("label",{htmlFor:"kabupaten_ktp",className:"block text-sm leading-6 font-bold",children:"Kota/Kabupaten"}),(0,l.jsxs)("div",{className:"w-full",children:[(0,l.jsxs)("select",{value:E("kabupaten_ktp")||"",className:"block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6",id:"kabupaten_ktp",...T("kabupaten_ktp"),children:[(0,l.jsx)("option",{value:"",disabled:!0,children:"Pilih Kota/Kabupaten"}),q.map((e,s)=>(0,l.jsx)("option",{value:e.city_code,children:e.city},s))]}),(0,l.jsx)("div",{className:"mt-1 h-1",children:(null===(v=D.kabupaten_ktp)||void 0===v?void 0:v.message)&&(0,l.jsx)("p",{className:"text-sm text-red-400",children:D.kabupaten_ktp.message})})]})]}),(0,l.jsxs)("div",{className:"sm:col-span-4",children:[(0,l.jsx)("label",{htmlFor:"kecamatan_ktp",className:"block text-sm leading-6 font-bold",children:"Kecamatan"}),(0,l.jsxs)("div",{className:"w-full",children:[(0,l.jsxs)("select",{value:E("kecamatan_ktp")||"",className:"block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6",id:"kecamatan_ktp",...T("kecamatan_ktp"),children:[(0,l.jsx)("option",{value:"",disabled:!0,children:"Pilih Kecamatan"}),B.map((e,s)=>(0,l.jsx)("option",{value:e.district_code,children:e.district},s))]}),(0,l.jsx)("div",{className:"mt-1 h-1",children:(null===(f=D.kecamatan_ktp)||void 0===f?void 0:f.message)&&(0,l.jsx)("p",{className:"text-sm text-red-400",children:D.kecamatan_ktp.message})})]})]}),(0,l.jsxs)("div",{className:"sm:col-span-4",children:[(0,l.jsx)("label",{htmlFor:"kelurahan_ktp",className:"block text-sm leading-6 font-bold",children:"Kelurahan"}),(0,l.jsxs)("div",{className:"w-full",children:[(0,l.jsxs)("select",{value:E("kelurahan_ktp")||"",className:"block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6",id:"kelurahan_ktp",...T("kelurahan_ktp"),children:[(0,l.jsx)("option",{value:"",disabled:!0,children:"Pilih kelurahan"}),V.map((e,s)=>(0,l.jsx)("option",{value:e.sub_district_code,children:e.sub_district},s))]}),(0,l.jsx)("div",{className:"mt-1 h-1",children:(null===(_=D.kelurahan_ktp)||void 0===_?void 0:_.message)&&(0,l.jsx)("p",{className:"text-sm text-red-400",children:D.kelurahan_ktp.message})})]})]}),(0,l.jsxs)("div",{className:"sm:col-span-4",children:[(0,l.jsx)("label",{htmlFor:"kodePos_ktp",className:"block text-sm leading-6 font-bold",children:"Kode Pos"}),(0,l.jsxs)("div",{className:"w-full",children:[(0,l.jsxs)("select",{value:E("kodePos_ktp")||"",className:"block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6",id:"kodePos_ktp",...T("kodePos_ktp"),children:[(0,l.jsx)("option",{value:"",disabled:!0,children:"Pilih Kode Pos"}),Q.map((e,s)=>(0,l.jsx)("option",{value:e.postal_code,children:e.postal_code},s))]}),(0,l.jsx)("div",{className:"mt-1 h-1",children:(null===(N=D.kodePos_ktp)||void 0===N?void 0:N.message)&&(0,l.jsx)("p",{className:"text-sm text-red-400",children:D.kodePos_ktp.message})})]})]})]}),(0,l.jsxs)("div",{className:"flex items-center my-4 gap-2",children:[(0,l.jsx)("input",{className:"w-4 h-4 text-emerald-light bg-emerald-light border-gray-300 rounded checked:bg-emerald-light checked:border-emerald-light focus:ring-blue-500",type:"checkbox",name:"domisili",id:"domisili",checked:L,onChange:()=>A(!L)}),(0,l.jsx)("label",{htmlFor:"domisili",children:"Alamat domisili sama dengan alamat KTP"})]}),!L&&(0,l.jsxs)("div",{className:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8",children:[(0,l.jsxs)("div",{className:"sm:col-span-8",children:[(0,l.jsx)("label",{htmlFor:"alamat_domisili",className:"block text-sm leading-6 font-bold",children:"Alamat Domisili"}),(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)("input",{type:"text",id:"alamat_domisili",...T("alamat_domisili"),autoComplete:"given-name",className:"block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"}),(0,l.jsx)("div",{className:"mt-1 h-1",children:(null===(y=D.alamat_domisili)||void 0===y?void 0:y.message)&&(0,l.jsx)("p",{className:"text-sm text-red-400",children:D.alamat_domisili.message})})]})]}),(0,l.jsxs)("div",{className:"sm:col-span-4",children:[(0,l.jsx)("label",{htmlFor:"provinsi_domisili",className:"block text-sm leading-6 font-bold",children:"Provinsi"}),(0,l.jsxs)("div",{className:"w-full",children:[(0,l.jsxs)("select",{value:E("provinsi_domisili")||"",className:"block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6",id:"provinsi_domisili",...T("provinsi_domisili"),children:[(0,l.jsx)("option",{value:"",disabled:!0,children:"Pilih Provinsi"}),O.map((e,s)=>(0,l.jsx)("option",{value:e.province_code,children:e.province},s))]}),(0,l.jsx)("div",{className:"mt-1 h-1",children:(null===(w=D.provinsi_domisili)||void 0===w?void 0:w.message)&&(0,l.jsx)("p",{className:"text-sm text-red-400",children:D.provinsi_domisili.message})})]})]}),(0,l.jsxs)("div",{className:"sm:col-span-4",children:[(0,l.jsx)("label",{htmlFor:"kabupaten_domisili",className:"block text-sm leading-6 font-bold",children:"Kota/Kabupaten"}),(0,l.jsxs)("div",{className:"w-full",children:[(0,l.jsxs)("select",{value:E("kabupaten_domisili")||"",className:"block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6",id:"kabupaten_domisili",...T("kabupaten_domisili"),children:[(0,l.jsx)("option",{value:"",disabled:!0,children:"Pilih Kota/Kabupaten"}),q.map((e,s)=>(0,l.jsx)("option",{value:e.city_code,children:e.city},s))]}),(0,l.jsx)("div",{className:"mt-1 h-1",children:(null===(P=D.kabupaten_domisili)||void 0===P?void 0:P.message)&&(0,l.jsx)("p",{className:"text-sm text-red-400",children:D.kabupaten_domisili.message})})]})]}),(0,l.jsxs)("div",{className:"sm:col-span-4",children:[(0,l.jsx)("label",{htmlFor:"kecamatan_domisili",className:"block text-sm leading-6 font-bold",children:"Kecamatan"}),(0,l.jsxs)("div",{className:"w-full",children:[(0,l.jsxs)("select",{value:E("kecamatan_domisili")||"",className:"block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6",id:"kecamatan_domisili",...T("kecamatan_domisili"),children:[(0,l.jsx)("option",{value:"",disabled:!0,children:"Pilih Kecamatan"}),B.map((e,s)=>(0,l.jsx)("option",{value:e.district_code,children:e.district},s))]}),(0,l.jsx)("div",{className:"mt-1 h-1",children:(null===(F=D.kecamatan_domisili)||void 0===F?void 0:F.message)&&(0,l.jsx)("p",{className:"text-sm text-red-400",children:D.kecamatan_domisili.message})})]})]}),(0,l.jsxs)("div",{className:"sm:col-span-4",children:[(0,l.jsx)("label",{htmlFor:"kelurahan_domisili",className:"block text-sm leading-6 font-bold",children:"Kelurahan"}),(0,l.jsxs)("div",{className:"w-full",children:[(0,l.jsxs)("select",{value:E("kelurahan_domisili")||"",className:"block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6",id:"kelurahan_domisili",...T("kelurahan_domisili"),children:[(0,l.jsx)("option",{value:"",disabled:!0,children:"Pilih Kelurahan"}),V.map((e,s)=>(0,l.jsx)("option",{value:e.sub_district_code,children:e.sub_district},s))]}),(0,l.jsx)("div",{className:"mt-1 h-1",children:(null===(K=D.kelurahan_domisili)||void 0===K?void 0:K.message)&&(0,l.jsx)("p",{className:"text-sm text-red-400",children:D.kelurahan_domisili.message})})]})]}),(0,l.jsxs)("div",{className:"sm:col-span-4",children:[(0,l.jsx)("label",{htmlFor:"kodePos_domisili",className:"block text-sm leading-6 font-bold",children:"Kode Pos"}),(0,l.jsxs)("div",{className:"w-full",children:[(0,l.jsxs)("select",{value:E("kodePos_domisili")||"",className:"block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6",id:"kodePos_domisili",...T("kodePos_domisili"),children:[(0,l.jsx)("option",{value:"",disabled:!0,children:"Pilih Kode Pos"}),Q.map((e,s)=>(0,l.jsx)("option",{value:e.postal_code,children:e.postal_code},s))]}),(0,l.jsx)("div",{className:"mt-1 h-1",children:(null===(C=D.kodePos_domisili)||void 0===C?void 0:C.message)&&(0,l.jsx)("p",{className:"text-sm text-red-400",children:D.kodePos_domisili.message})})]})]})]})]})}},{id:"Step 4",name:"Penghasilan",fields:["pekerjaan","industri_pekerjaan","pendapatan_per_bulan","slip_gaji","nomor_rekening","nama_pemilik_rekening","nomor_rekening_kustodian","nama_pemilik_rekening_kustodian"],component:e=>{var s,a;let{register:i,control:n,errors:d,watch:t,setValue:r}=e,p=t("pekerjaan"),[h,x]=(0,o.useState)(!1),[g,u]=(0,o.useState)("Unggah Slip Gaji"),{profession:k,industries:j,salaries:b}=(0,c.Z)(),v=(e,s)=>{let a=e.target.files;if(a&&a.length>0){let e=a[0];r(s.name,e),s.onChange(e),u(e.name)}};return(0,o.useEffect)(()=>{"direktur"===p||"wiraswasta"===p?(x(!0),r("slip_gaji",void 0)):x(!1)},[p,r]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"mt-10 grid grid-cols-1 gap-x-3 gap-y-4 lg:gap-x-6 lg:gap-y-8 sm:grid-cols-8",children:[(0,l.jsxs)("div",{className:"sm:col-span-4",children:[(0,l.jsx)("label",{htmlFor:"pekerjaan",className:"block text-sm leading-6 font-bold",children:"Pilih Pekerjaan"}),(0,l.jsxs)("div",{className:"w-full",children:[(0,l.jsxs)("select",{className:"block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6",id:"pekerjaan",value:p||"",...i("pekerjaan",{required:"Pilih pekerjaan diperlukan"}),children:[(0,l.jsx)("option",{value:"",disabled:!0,children:"Pilih pekerjaan"}),k.map(e=>(0,l.jsx)("option",{value:e.id,children:e.pekerjaan.toUpperCase()},e.id))]}),(0,l.jsx)("div",{className:"mt-1 h-1",children:d.pekerjaan&&(0,l.jsx)("p",{className:"text-sm text-red-400",children:d.pekerjaan.message})})]})]}),(0,l.jsxs)("div",{className:"sm:col-span-4",children:[(0,l.jsx)("label",{htmlFor:"industri_pekerjaan",className:"block text-sm leading-6 font-bold",children:"Pilih Bidang Pekerjaan"}),(0,l.jsxs)("div",{className:"w-full",children:[(0,l.jsxs)("select",{className:"block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6",id:"industri_pekerjaan",value:t("industri_pekerjaan")||"",...i("industri_pekerjaan",{required:"Pilih bidang pekerjaan diperlukan"}),children:[(0,l.jsx)("option",{value:"",disabled:!0,children:"Pilih Bidang Pekerjaan"}),j.map(e=>(0,l.jsx)("option",{value:e.id,children:e.industri_pekerjaan.toUpperCase()},e.id))]}),(0,l.jsx)("div",{className:"mt-1 h-1",children:d.industri_pekerjaan&&(0,l.jsx)("p",{className:"text-sm text-red-400",children:d.industri_pekerjaan.message})})]})]}),(0,l.jsxs)("div",{className:"sm:col-span-4",children:[(0,l.jsx)("label",{htmlFor:"slipGaji",className:"block text-sm leading-6 font-bold",children:"Upload Slip Gaji"}),(0,l.jsx)("div",{className:"w-full flex items-center",children:(0,l.jsx)(m.Qr,{name:"slip_gaji",control:n,render:e=>{let{field:s}=e;return(0,l.jsxs)("div",{className:"w-full flex items-center justify-between",children:[(0,l.jsx)("input",{type:"text",className:"block w-full rounded-l-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-sky focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6",placeholder:h?"":g,disabled:!0}),(0,l.jsxs)("label",{className:"inline-flex items-center px-8 py-4 border border-transparent text-sm leading-4 font-medium rounded-md text-white \n              ".concat(h?"bg-gray-400 cursor-not-allowed":"bg-emerald-light hover:bg-green-700 focus:ring-2 focus:ring-offset-2 focus:ring-green-500"),children:["Unggah",(0,l.jsx)("input",{type:"file",className:"hidden",disabled:h,onChange:e=>v(e,s)})]})]})}})}),(0,l.jsx)("div",{className:"mt-1 h-1",children:(null===(s=d.slip_gaji)||void 0===s?void 0:s.message)&&(0,l.jsx)("p",{className:"text-sm text-red-400",children:String(null===(a=d.slip_gaji)||void 0===a?void 0:a.message)})})]}),(0,l.jsxs)("div",{className:"sm:col-span-4",children:[(0,l.jsx)("label",{htmlFor:"pendapatan_per_bulan",className:"block text-sm leading-6 font-bold",children:"Total Gaji dalam Sebulan"}),(0,l.jsxs)("div",{className:"w-full",children:[(0,l.jsxs)("select",{className:"block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6",id:"pendapatan_per_bulan",value:t("pendapatan_per_bulan")||"",...i("pendapatan_per_bulan",{required:"Pilih total gaji diperlukan"}),children:[(0,l.jsx)("option",{value:"",disabled:!0,children:"Pilih Total Gaji"}),b.map(e=>(0,l.jsx)("option",{value:e.id,children:e.pendapatan},e.id))]}),(0,l.jsx)("div",{className:"mt-1 h-1",children:d.pendapatan_per_bulan&&(0,l.jsx)("p",{className:"text-sm text-red-400",children:d.pendapatan_per_bulan.message})})]})]}),(0,l.jsxs)("div",{className:"sm:col-span-4",children:[(0,l.jsx)("label",{htmlFor:"nomor_rekening_kustodian",className:"block text-sm leading-6 font-bold",children:"Nomor Rekening Kustodian (Opsional)"}),(0,l.jsxs)("div",{className:"w-full",children:[(0,l.jsx)("input",{type:"text",className:"block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6",id:"nomor_rekening_kustodian",...i("nomor_rekening_kustodian")}),(0,l.jsx)("div",{className:"mt-1 h-1",children:d.nomor_rekening_kustodian&&(0,l.jsx)("p",{className:"text-sm text-red-400",children:d.nomor_rekening_kustodian.message})})]})]}),(0,l.jsxs)("div",{className:"sm:col-span-4",children:[(0,l.jsx)("label",{htmlFor:"nama_pemilik_rekening_kustodian",className:"block text-sm leading-6 font-bold",children:"Nama Pemilik Rekening Kustodian (Opsional)"}),(0,l.jsxs)("div",{className:"w-full",children:[(0,l.jsx)("input",{type:"text",className:"block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6",id:"nama_pemilik_rekening_kustodian",...i("nama_pemilik_rekening_kustodian")}),(0,l.jsx)("div",{className:"mt-1 h-1",children:d.nama_pemilik_rekening_kustodian&&(0,l.jsx)("p",{className:"text-sm text-red-400",children:d.nama_pemilik_rekening_kustodian.message})})]})]}),(0,l.jsxs)("div",{className:"sm:col-span-4",children:[(0,l.jsx)("label",{htmlFor:"nomor_rekening",className:"block text-sm leading-6 font-bold",children:"Nomor Rekening"}),(0,l.jsxs)("div",{className:"w-full",children:[(0,l.jsx)("input",{type:"text",className:"block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6",id:"nomor_rekening",...i("nomor_rekening")}),(0,l.jsx)("div",{className:"mt-1 h-1",children:d.nomor_rekening&&(0,l.jsx)("p",{className:"text-sm text-red-400",children:d.nomor_rekening.message})})]})]}),(0,l.jsxs)("div",{className:"sm:col-span-4",children:[(0,l.jsx)("label",{htmlFor:"nama_pemilik_rekening",className:"block text-sm leading-6 font-bold",children:"Nama Pemilik Rekening"}),(0,l.jsxs)("div",{className:"w-full",children:[(0,l.jsx)("input",{type:"text",className:"block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6",id:"nama_pemilik_rekening",...i("nama_pemilik_rekening")}),(0,l.jsx)("div",{className:"mt-1 h-1",children:d.nama_pemilik_rekening&&(0,l.jsx)("p",{className:"text-sm text-red-400",children:d.nama_pemilik_rekening.message})})]})]})]})})}},{id:"Step 5",name:"APU PPT",fields:t.N,component:t.Z},{id:"Step 6",name:"Completed",component:r.Z}];var k=e=>{let s=(0,h.useRouter)(),a=(0,x.p)();return(0,o.useEffect)(()=>{a||s.push("/masuk")},[s,a]),(0,l.jsx)("main",{className:"mx-auto",children:(0,l.jsx)(g,{steps:u})})}}},function(e){e.O(0,[231,2794,2016,9169,5484,2971,7023,1744],function(){return e(e.s=5810)}),_N_E=e.O()}]);