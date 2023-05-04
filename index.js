const btnGetData = document.getElementById('btn-process-data')

btnGetData.addEventListener('click', ()=>{
    const cardJobData = document.querySelectorAll('div[class*=item-] > div[class*=similarJob]')
    const cardJobDataArray = [...cardJobData]
    const countries = ['PERU', 'MEXICO', 'COLOMBIA', 'CHILE']
    const jobByCountry = {}
    let jobs = []
    const jobDataDetail = cardJobDataArray.map(jobData => (
        {
            title: jobData.querySelector('a[id*=vacante_similar]').title,
            salary: jobData.querySelector('p[id*=vacante_similar_salario]').innerText,
        }
    ))

    countries.forEach(country => {
        if (country === 'Mexico'){
            jobs = jobDataDetail.filter(item => 
                item.title.toUpperCase().includes(country) ||
                item.title.toUpperCase().includes("OBREGON") ||
                item.title.toUpperCase().includes("MIXCOAC"))
        }else{
            jobs = jobDataDetail.filter((item) => item.title.toUpperCase().includes(country));
        }

        return jobs;
    })
    console.log('jobs', jobs)

})