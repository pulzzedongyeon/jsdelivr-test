function interactor_go(info)
{
  const apiUrl = 'https://interactor.com:1290/v1/url';
  fetch(apiUrl, {
    method: "POST",
    header: {
      "x-api-key": info.api_key
    },
    body: JSON.stringify({ user: info.user, origin_url: window.location.href })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    window.location.href = data.url;
  })
  .catch(error => {
    console.error('Error:', error);
  });
}