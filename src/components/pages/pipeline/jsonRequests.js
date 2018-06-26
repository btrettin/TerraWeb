export const Requests =
{
"Requests" : {
    "Lawn Mowing": {
        "fields": [
            {"name":"Address", "type":"Text", "id":"lawnField" },
            {"name": "State", "type":"dropDown","placeholder":"state","id":"state", "options": [
                {"key": "AL", "value":"AL", "text":"Alabama"}
            ]}
        ]
    },
    "Leaf Raking": {
        "fields": [
            {"name":"Address", "type":"Text", "id":"leafRaking" }
        ]
    },
    "Snow Clearing": {
        "fields": [
            {"name":"Address", "type":"Text", "id":"snowClearing" }
        ]
    },
    "Custom Request": {
        "fields": [
            {"name":"Address", "type":"Text", "id":"customRequest" }
        ]
    }
}
};
export default Requests;
