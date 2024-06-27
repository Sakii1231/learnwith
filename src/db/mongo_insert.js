
export function mongo_insert_one_post(token, data) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
    "dataSource": "Cluster0",
    "collection": "student_details",
    "database": "students",
    "document": data
    });

    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
    };

    fetch("https://ap-south-1.aws.data.mongodb-api.com/app/data-ufwomfe/endpoint/data/v1/action/insertOne", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

}
