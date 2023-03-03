Hey Dev, welcome the image generation API through text using OpenAi artificial intelligence.

# **How to use**
1 . To use the API, clone the repository <br/>
2. Create the .env file by copying the same variables as the .env.example file at the root of the project. <br/>
3. Fill in the OpenAi_api_Key variable with the right key (to pick up the correct api key, create an account at https://platform.openai.com and go to the page https://platform.openai.com/account/api-keys) to generate one.
Fill in the respective environment variables and have fun.

## **Endpoints**
- GET <br/>
```js
/
``` 
response:
```json
{
    "message": "API Working...",
}
```
 - POST<br/>
```js
 /generate-image 
 ```
Requisition Body:<br/>
```json
{
    "command": "The Bear Swimming",
    "size": "medium"
}
```

Where size can be small, medium and large.
There is a third item in the body of the refinement, called Qty, receives a number 1 to 10 and specifies the amount of images that will be returned.

response :
```json
{
	"success": true,
	"data": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-QttfFu36zj8x4ThEWDTL8JPw/user-IgXxMh9l49iQ53R4rsEB7r20/img-M9LjfHbjAOEpJCjCcVLFI4R3.png?st=2023-03-03T15%3A00%3A14Z&se=2023-03-03T17%3A00%3A14Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-03-03T00%3A12%3A57Z&ske=2023-03-04T00%3A12%3A57Z&sks=b&skv=2021-08-06&sig=gpOGRqTJPtX%2B1tAl/RH2jLGPRBeKcYg76c6kaQCk3VM%3D"
}
```

where date contains the link of the generated image.