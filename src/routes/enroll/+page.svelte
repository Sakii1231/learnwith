<script lang='ts'>
import { Input } from "$lib/components/ui/input";
import { Label } from "$lib/components/ui/label";
import { Textarea } from "$lib/components/ui/textarea";
import MyBtn from "$lib/MyBtn.svelte";
import { PUBLIC_SUCCESS_PAGE, PUBLIC_WEB3_FORM_KEY } from '$env/static/public';

let student_name = '';
let student_email = '';
let student_selected_course = '';
let student_details = '';
let phone_number = '';

interface Student_schema {
    name: string
    email: string
    phone: string
    course: string
    details: string
    created_at: Date
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

</script>



<form action="https://api.web3forms.com/submit" method="POST">
<!-- <form>    -->
<input type="hidden" name="access_key" value={PUBLIC_WEB3_FORM_KEY}>

  <div class="grid grid-cols-1 gap-7 place-items-center m-8 p-6">

    <h1  class="font-bold text-xl md:text-2xl mb-4 text-my_gray">Register with us</h1>

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
        <Textarea bind:value="{student_details}" name="message" required  placeholder="Type your message here."></Textarea>
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

    <MyBtn type='submit' label="Submit Form" onClick={write_to_db} myColor='bg-my_yellow'></MyBtn>
  </div>

</form>