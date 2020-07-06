from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import SweetCard
from .serializers import *


@api_view(['GET', 'POST'])
def cards_list(request):
    """
    List of the cards.
    """
    if request.method == 'GET':
        data = []
        next_page = 1
        previous_page = 1
        sweet_cards = SweetCard.objects.all()
        page = request.GET.get('page', 1)
        paginator = Paginator(sweet_cards, 10)
        try:
            data = paginator.page(page)
        except PageNotAnInteger:
            data = paginator.page(1)
        except EmptyPage:
            data = paginator.page(paginator.num_pages)

        serializer = SweetCardSerializer(data, context={'request': request}, many=True)
        if data.has_next():
            next_page = data.next_page_number()
        if data.has_previous():
            previous_page = data.previous_page_number()

        return Response(
            {
                'data': serializer.data,
                'count': paginator.count,
                'numpages': paginator.num_pages,
                'nextlink': '/api/cards/?page=' + str(next_page),
                'prevlink': '/api/cards/?page=' + str(previous_page)
            }
        )

    elif request.method == 'POST':
        serializer = SweetCardSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def cards_detail(request, pk):
    """
    Retrieve, update or delete a customer by id/pk.
    """
    try:
        sweet_card = SweetCard.objects.get(pk=pk)
    except SweetCard.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = SweetCardSerializer(sweet_card,context={'request': request})
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = SweetCardSerializer(sweet_card, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        sweet_card.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
