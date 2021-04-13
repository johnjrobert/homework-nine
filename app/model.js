var MODEL = (function() {

    var homeContent = `
    
        <div class="page-one">
        <div class="first">
            <div class="pl">
            <p class="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat omnis officia animi dolorum! Nisi autem, veniam tenetur neque suscipit voluptas alias ratione sapiente qui laboriosam! Quidem, illo! Possimus, est repellendus.</p>
            </div>
        </div>
        <div class="second">
            <div class="pl">
            <p class="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat omnis officia animi dolorum! Nisi autem, veniam tenetur neque suscipit voluptas alias ratione sapiente qui laboriosam! Quidem, illo! Possimus, est repellendus.</p>
            </div>
        </div>
        <div class="third">
        <div class="pl">
        <p class="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat omnis officia animi dolorum! Nisi autem, veniam tenetur neque suscipit voluptas alias ratione sapiente qui laboriosam! Quidem, illo! Possimus, est repellendus.</p>
        </div>
        </div>
        <div class="fourth">
        <div class="pl">
        <p class="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat omnis officia animi dolorum! Nisi autem, veniam tenetur neque suscipit voluptas alias ratione sapiente qui laboriosam! Quidem, illo! Possimus, est repellendus.</p>
        </div>
        </div>

        <div class="fifth">
            <p class="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque tempora placeat quo eius velit ullam, consequatur nostrum praesentium et fugiat, eos sint nulla. Maxime dignissimos ex sint quidem aliquid?</p>
        </div>

    </div>

    `

    var aboutContent = `

    <div class="page-two">
    <div class="first-two">
    <div class="pl">
    <p class="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat omnis officia animi dolorum! Nisi autem, veniam tenetur neque suscipit voluptas alias ratione sapiente qui laboriosam! Quidem, illo! Possimus, est repellendus.</p>
    </div>
    </div>
    <div class="second-two">
    <div class="pl">
    <p class="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat omnis officia animi dolorum! Nisi autem, veniam tenetur neque suscipit voluptas alias ratione sapiente qui laboriosam! Quidem, illo! Possimus, est repellendus.</p>
    </div>
    </div>
    <div class="third-two">
    <div class="pl">
    <p class="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat omnis officia animi dolorum! Nisi autem, veniam tenetur neque suscipit voluptas alias ratione sapiente qui laboriosam! Quidem, illo! Possimus, est repellendus.</p>
    </div>
    </div>
    <div class="fourth-two">
    <div class="pl">
    <p class="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat omnis officia animi dolorum! Nisi autem, veniam tenetur neque suscipit voluptas alias ratione sapiente qui laboriosam! Quidem, illo! Possimus, est repellendus.</p>
    </div>
    </div>

    <div class="fifth-two">
        <p class="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque tempora placeat quo eius velit ullam, consequatur nostrum praesentium et fugiat, eos sint nulla. Maxime dignissimos ex sint quidem aliquid?</p>
    </div>
    </div>

    `

    var peopleContent = `
 
    <div class="page-three">
    <div class="first-three">
    <div class="pl">
    <p class="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat omnis officia animi dolorum! Nisi autem, veniam tenetur neque suscipit voluptas alias ratione sapiente qui laboriosam! Quidem, illo! Possimus, est repellendus.</p>
    </div>
    </div>
    <div class="second-three">
    <div class="pl">
    <p class="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat omnis officia animi dolorum! Nisi autem, veniam tenetur neque suscipit voluptas alias ratione sapiente qui laboriosam! Quidem, illo! Possimus, est repellendus.</p>
    </div>
    </div>
    <div class="third-three">
    <div class="pl">
    <p class="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat omnis officia animi dolorum! Nisi autem, veniam tenetur neque suscipit voluptas alias ratione sapiente qui laboriosam! Quidem, illo! Possimus, est repellendus.</p>
    </div>
    </div>
    <div class="fourth-three">
    <div class="pl">
    <p class="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat omnis officia animi dolorum! Nisi autem, veniam tenetur neque suscipit voluptas alias ratione sapiente qui laboriosam! Quidem, illo! Possimus, est repellendus.</p>
    </div>
    </div>

    <div class="fifth-three">
        <p class="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque tempora placeat quo eius velit ullam, consequatur nostrum praesentium et fugiat, eos sint nulla. Maxime dignissimos ex sint quidem aliquid?</p>
    </div>
    </div>

    `

    var placesContent = `
 
    <div class="page-four">
    <div class="first-four">
    <div class="pl">
    <p class="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat omnis officia animi dolorum! Nisi autem, veniam tenetur neque suscipit voluptas alias ratione sapiente qui laboriosam! Quidem, illo! Possimus, est repellendus.</p>
    </div>
    </div>
    <div class="second-four">
    <div class="pl">
    <p class="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat omnis officia animi dolorum! Nisi autem, veniam tenetur neque suscipit voluptas alias ratione sapiente qui laboriosam! Quidem, illo! Possimus, est repellendus.</p>
    </div>
    </div>
    <div class="third-four">
    <div class="pl">
    <p class="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat omnis officia animi dolorum! Nisi autem, veniam tenetur neque suscipit voluptas alias ratione sapiente qui laboriosam! Quidem, illo! Possimus, est repellendus.</p>
    </div>
    </div>
    <div class="fourth-four">
    <div class="pl">
    <p class="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat omnis officia animi dolorum! Nisi autem, veniam tenetur neque suscipit voluptas alias ratione sapiente qui laboriosam! Quidem, illo! Possimus, est repellendus.</p>
    </div>
    </div>

    <div class="fifth-four">
        <p class="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque tempora placeat quo eius velit ullam, consequatur nostrum praesentium et fugiat, eos sint nulla. Maxime dignissimos ex sint quidem aliquid?</p>
    </div>

    </div>

`


    var _getPageContent = function(pageId) {
        console.log("test" + pageId);
        
        $("#hello").html(eval(pageId));
    };

    return {
        getPageContent: _getPageContent
    }
})();