import { dump } from "js-yaml";

const createYMLData = dataString => dump(dataString);

const createYMLFile = dataString => new File([createYMLData(dataString)], 'model.yml', {
    type: "text/plain",
});

export default createYMLFile;