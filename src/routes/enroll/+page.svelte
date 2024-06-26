<script>
import { Input } from "$lib/components/ui/input";
import { Label } from "$lib/components/ui/label";
import { Textarea } from "$lib/components/ui/textarea";
import MyBtn from "$lib/MyBtn.svelte";
import { PUBLIC_SUCCESS_PAGE } from '$env/static/public';

let student_name = '';
let student_email = '';
let student_selected_course_1 = 'Frontend';
let student_selected_course_2 = 'Backend';
let student_selected_course_3 = 'AI/ML';
let student_details = '';
let phone_number = '';

console.log(PUBLIC_SUCCESS_PAGE)

function show(){
    console.log(student_name, student_email, student_selected_course_1, student_details)
}

</script>



<form action="https://api.web3forms.com/submit" method="POST">
    <input type="hidden" name="access_key" value='3a223ac4-d7ab-481a-aee1-029a95e9e510'>

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
                <Input bind:value="{student_selected_course_1}" type="radio" id="Frontend" name="selected_course"/>
                <Label for="Frontend">Frontend</Label><br>
            </div>

            <div class="grid grid-cols-1 gap-1 place-items-center">
                <Input bind:value="{student_selected_course_2}" type="radio" id="Backend" name="selected_course"/>
                <Label for="Backend">Backend</Label><br>
            </div>


            <div class="grid grid-cols-1 gap-1 place-items-center">
                <Input bind:value="{student_selected_course_3}" type="radio" id="AI/ML" name="selected_course"/>
                <Label for="AI/ML">AI/ML</Label><br>
            </div>
        </div>
    </div>

    <div class="grid w-full max-w-xs md:max-w-sm items-center gap-1.5 mt-3 -mb-10">
        <Label for="message">Details</Label>
        <p class="text-xs text-muted-foreground">Optional, your messege will be forwarded to the team</p>
        <Textarea bind:value="{student_details}" name="message" required  placeholder="Type your message here."></Textarea>
    </div>


 <!-- Optional: From Name you want to see in the email
       Default is "Notifications". you can overwrite here -->
    <input type="hidden" name="from_name" value="Your Website Name">

    <!-- Honeypot Spam Protection -->
    <input type="checkbox" name="botcheck" class="hidden" style="display: none;">

    <!-- hCaptcha: Recommended for Advanced Spam Protection. -->
    <div class="h-captcha" data-captcha="true"></div>

    <!-- Optional: Custom Redirection or Thank you Page
       Make sure you add full URL including https:// -->
    <input type="hidden" name="redirect" value={PUBLIC_SUCCESS_PAGE}>

    <MyBtn type='submit' label="Submit Form" onClick={show} myColor='bg-my_yellow'></MyBtn>
  </div>

</form>