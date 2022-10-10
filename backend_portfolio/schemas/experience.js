export default{
    name:'experiences',
    title:'Kinh nghiệm',
    type: 'document',
    fields:[
        {
            name:'year',
            title:'Năm',
            type:'string'
        },
        {
            name:'works',
            title:'Công việc',
            type:'array',
            of:[{ type:'workExperience'}]
        },
    ]
}