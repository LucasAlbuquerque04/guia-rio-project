function handleCredentialResponse(response) {
  const data = jwt_decode(response.credential)
  window.location.href = "info_cadastro.html";

}

window.onload = function () {
  google.accounts.id.initialize({
    client_id: "1083456906797-apkmvat6f21av50ntvqhukg6o464bcfr.apps.googleusercontent.com",
    callback: handleCredentialResponse
  });

  google.accounts.id.renderButton(
    document.getElementById("btn-google"),{ 
      type:"standard",
      shape:"pill",
      theme:"outline",
      text:"continue_with.",
      size:"large",
      logo_alignment:"left",
      width:"300"
     } // customization attributes;
    );
  google.accounts.id.prompt(); // also display the One Tap dialog
}