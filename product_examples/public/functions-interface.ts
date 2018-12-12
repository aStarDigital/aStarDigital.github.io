// This is the interface to Firebase Functions that gets called from the index.html.

async function genericAPICall(input: String, url: RequestInfo): Promise<any>{
    //Call fetch() with an FF endpoint that contains input as the query.
    const result: any = await fetch(url + "?" + input);

    //Do something with the result.
};