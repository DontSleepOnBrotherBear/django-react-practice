from django.shortcuts import render

from .models import Post

from .forms import PostForm

# Create your views here.


def temp_home(request):
    context = {}

    posts = Post.objects.all()
    postform = PostForm()

    if request.POST:
        form = PostForm(request.POST)
        if form.is_valid():
            form.save()
        else:
            context['posts'] = posts
            context['postform'] = postform
    else:
        context['posts'] = posts
        context['postform'] = postform
        


    return render(request, 'temp_home.html', context )








#  if request.POST:
#         form = Ten31ExchangeForm(request.POST)
#         if form.is_valid():
#             form.save()
#             return redirect('portal')
#         else:
#             context['new_exchange_form'] = formß