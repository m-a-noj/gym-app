export const exerciseOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '9669407f44msh1a5f6a2c701c62ap12fa6cjsn1ab2a675cb12',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async(url,Option)=>{
    const response = await fetch(url,Option);
    const data = await response.json();
    return data;
}