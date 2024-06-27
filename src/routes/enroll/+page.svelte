<script lang='ts'>
import { Input } from "$lib/components/ui/input";
import { Label } from "$lib/components/ui/label";
import { Textarea } from "$lib/components/ui/textarea";
import MyBtn from "$lib/components/MyBtn.svelte";
import { PUBLIC_SUCCESS_PAGE, PUBLIC_WEB3_FORM_KEY, PUBLIC_ACCESS } from '$env/static/public';
import { onMount } from 'svelte';
import { saveToken, getToken, clearToken } from '$db/token';
import { mongo_insert_one_post } from '$db/mongo_insert';
import { md5,checkHash } from '$lib/utils'

let student_name = '';
let student_email = '';
let phone_number = '';
let student_selected_course = '';
let student_details = '';

interface Student_schema {
    name: string
    email: string
    phone: string
    course: string
    details: string
    created_at: Date
    email_hash: string
}

async function mongo_post(){
    const student1:Student_schema = {
    name: student_name,
    email: student_email.toLowerCase(),
    phone: phone_number,
    course: student_selected_course,
    details: student_details,
    created_at: new Date(),
    email_hash: md5(student_email)
    }
    if (student_name === '' || student_email === '' || phone_number === '' || student_selected_course === '') {
        alert('Please make sure to fill all mandatory(*) fields.')
    }
    else {
        token = await getValidToken();
        mongo_insert_one_post(token, student1)
    }

}

function onChange(event) {
    student_selected_course = event.currentTarget.value;
	}

async function write_to_db(){
    const student1:Student_schema = {
    name: student_name,
    email: student_email,
    phone: phone_number,
    course: student_selected_course,
    details: student_details,
    created_at: new Date()
    }
    try {
      const response = await fetch('/api/student', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(student1),
      });

      const result = await response.json();
      console.log(result)
    } catch (error) {
      console.error('Error:', error);
    }
}



// for access token
let token;

async function fetchToken() {
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
    "key": PUBLIC_ACCESS
});

const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
};

try {
    const response = await fetch("https://services.cloud.mongodb.com/api/client/v2.0/app/data-ufwomfe/auth/providers/api-key/login", requestOptions);
    const result = await response.json();
    
    // Assuming the token is in the 'access_token' field
    const accessToken = result.access_token;
    
    // Set token expiration time to 29 minutes from now
    const expiryTime = Date.now() + (29 * 60 * 1000);
    
    // Save token and expiration time to localStorage
    saveToken(accessToken, expiryTime);
    console.log('fetched new token:', accessToken)
    
    return accessToken;
} catch (error) {
    console.error('Error fetching token:', error);
}
}

async function getValidToken() {
const tokenData = getToken();
const currentTime = Date.now();

if (tokenData && currentTime < tokenData.expiry) {
    console.log('Using cached token:', tokenData.token);
    return tokenData.token;
} else {
    return await fetchToken();
}
}

onMount(async () => {
token = await getValidToken();
console.log('Token:', token);
});

// end for access

</script>



<form action="https://api.web3forms.com/submit" method="POST">
<!-- <form>    -->
<input type="hidden" name="access_key" value={PUBLIC_WEB3_FORM_KEY}>

  <div class="grid grid-cols-1 gap-7 place-items-center m-8 p-6">

    <h1  class="font-bold text-xl md:text-2xl mb-4 ">Register with us</h1>

    <div class="grid w-full max-w-xs md:max-w-sm items-center gap-1.5">
        <Label for="Name">Name *</Label>
        <Input bind:value="{student_name}" type="text" id="name" name='name' placeholder="Full name" required/>
    </div>

    <div class="grid w-full max-w-xs md:max-w-sm items-center gap-1.5">
        <Label for="Email">Email *</Label>
        <Input bind:value="{student_email}" type="email" id="email" name='email' placeholder="Email address" />
    </div>

    <div class="grid w-full max-w-xs md:max-w-sm items-center gap-1.5">
        <Label for="Email">Phone number *</Label>
        <Input bind:value="{phone_number}" type="tel" id="phone" name="phone" placeholder="Phone number" />
    </div>

    <div class="grid w-full max-w-xs md:max-w-sm items-center gap-1.5">
        <Label for="Name">Choose a course *</Label>
        <p class="text-xs text-muted-foreground">Mention in deails if you wish to choose more than one</p>

        <div class="flex justify-between max-w-xs md:max-w-sm gap-9 h-12 mt-2">

            <div class="grid grid-cols-1 gap-1 place-items-center">
                <Input checked={student_selected_course==='Frontend'} on:change={onChange} value='Frontend' type="radio" id="Frontend" name="selected_course"/>
                <Label for="Frontend">Frontend</Label><br>
            </div>

            <div class="grid grid-cols-1 gap-1 place-items-center">
                <Input checked={student_selected_course==='Backend'} on:change={onChange} value='Backend' type="radio" id="Backend" name="selected_course"/>
                <Label for="Backend">Backend</Label><br>
            </div>


            <div class="grid grid-cols-1 gap-1 place-items-center">
                <Input checked={student_selected_course==='AI/ML'} on:change={onChange} value='AI/ML' type="radio" id="AI/ML" name="selected_course"/>
                <Label for="AI/ML">AI/ML</Label><br>
            </div>
        </div>
    </div>

    <div class="grid w-full max-w-xs md:max-w-sm items-center gap-1.5 mt-3 -mb-10">
        <Label for="message">Details</Label>
        <p class="text-xs text-muted-foreground">Optional, your message will be forwarded to the team</p>
        <Textarea bind:value="{student_details}" name="message"  placeholder="Type your message here."></Textarea>
    </div>


 <!-- Optional: From Name you want to see in the email
       Default is "Notifications". you can overwrite here -->
    <input type="hidden" name="from_name" value="companyco">

    <!-- Honeypot Spam Protection -->
    <input type="checkbox" name="botcheck" class="hidden" style="display: none;">

    <!-- hCaptcha: Recommended for Advanced Spam Protection. -->
    <div class="h-captcha" data-captcha="true"></div>

    <!-- Optional: Custom Redirection or Thank you Page
       Make sure you add full URL including https:// -->
    <input type="hidden" name="redirect" value={PUBLIC_SUCCESS_PAGE}>

    <MyBtn type='submit' label="Submit Form" onClick={mongo_post} myColor='bg-my_yellow'></MyBtn>
  </div>

</form>