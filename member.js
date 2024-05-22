function skillsMember() {
  var member = document.querySelector('.skills-member');
  var memberImg = document.querySelector('.skills-member-img');
  var memberName = document.querySelector('.skills-member-name');
  var memberPosition = document.querySelector('.skills-member-position');
  var memberDescription = document.querySelector('.skills-member-description');

  member.addEventListener('click', function() {
    memberImg.src = 'img/member1.jpg';
    memberName.innerHTML = 'John Doe';
    memberPosition.innerHTML = 'CEO';
    memberDescription.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada mauris sit amet semper rutrum. Morbi at ante eget metus congue laoreet. Fusce ultricies, urna vitae vehicula tincidunt, nunc elit semper nisi, nec pretium felis erat a turpis.';
  });
}